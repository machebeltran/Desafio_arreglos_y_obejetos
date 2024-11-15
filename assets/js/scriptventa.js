const ventas = [
  {
  imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
  nombre: "Apartamento de lujo en zona exclusiva",
  descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
  ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
  habitaciones: "4",
  baños: "4",
  precio: "5.000",
  smoke: false,
  pets: false

},
{
  imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
  nombre: "Apartamento acogedor en la montaña",
  descripcion: "Este apartamento acogedor está situado en lo alto de una montaña, hermosa vistas",
  ubicacion: "789 Mountain Road, Summit Peaks, CA 234568",
  habitaciones: "2",
  baños: "1",
  precio: "1.200",
  smoke: true,
  pets: true

},
{
  imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
  nombre: "Penthouse de lujo con terraza panorámica",
  descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
  ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
  habitaciones: "3",
  baños: "3",
  precio: "4.500",
  smoke: false,
  pets: true

},
{
  imagen: "https://cache.enlaceinmobiliario.cl/cdn-cgi/image/format=webp,width=auto,height=293/-643736cb9f2104.webp",
  nombre: "Departamento en venta. Circunvalación sur | Etapa 2",
  descripcion: "Hermosos departamentos con amplia vita a la ciudad de Valdivia y su entorno natural",
  ubicacion: "Valdivia, Circunvalación sur N° 4883",
  habitaciones: "3",
  baños: "2",
  precio: "2.900",
  smoke: true,
  pets: true

},
{
  imagen: "https://imgclasificados5.emol.com/Proyectos/imagenes/proyecto/PR_FOTO_4367_Fachada.jpg",
  nombre: "Nuevo centro condominio",
  descripcion: "Hermosos departamentos, a un costado del Teatro Regional del Bio Bio. Ven a visitarno o agenda una visita piloto",
  ubicacion: "Desiderio Sanhueza 160, Concepción, VIII Región",
  habitaciones: "3",
  baños: "2",
  precio: "1.850",
  smoke: true,
  pets: false

},
{
  imagen: "https://esepe.cl/wp-content/uploads/Fachada-PG-junio24.webp",
  nombre: "PARQUE GERMANIA",
  descripcion: "Emplazado en pleno corazón de Puerto Montt, Parque Germania se encuentra rodeado de áreas verdes y con excelente conectividad.",
  ubicacion: "Diag. Germania 200",
  habitaciones: "3",
  baños: "2",
  precio: "2.850",
  smoke: false,
  pets: true

},
]

const elementoHTML = document.querySelector(".row")
let cards = ""
for (let venta of ventas){
  cards+= `<div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="${venta.imagen}"
              class="card-img-top"
              alt="Imagen del departamento"
            />
            <div class="card-body">
              <h5 class="card-title">
              ${venta.nombre}
              </h5>
              <p class="card-text">
              ${venta.descripcion}
                residencial
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i>  ${venta.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |
                <i class="fas fa-bath"></i> ${venta.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${venta.precio}</p>
              <p style="color: ${venta.smoke ? "green":"red"}"> ${venta.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${venta.smoke ? "Permitido fumar" : "Esta Prohibido fumar" }</p>
              <p style="color: ${venta.pets ? "green" : "red"}">${venta.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${venta.pets ?"Mascotas permitidas" : "Estan prohibidas las mascotas" }</p>
            </div>
          </div>  
        </div>`
}
elementoHTML.innerHTML= cards