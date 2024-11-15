const alquileres = [
    {
        imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        nombre: "Apartamento en el centro de la ciudad",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: "2.000",
        smoke: false,
        pets: true
    
    },
    {
        imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        nombre: "Apartamento luminoso con vista al mar",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
        habitaciones: "3",
        baños: "3",
        precio: "2.500",
        smoke: true,
        pets: true
    
    },
    {
        imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        nombre: "Condominio moderno en zona residencial",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "123 Main Street, Anytown, CA 91234",
        habitaciones: "2",
        baños: "2",
        precio: "2.200",
        smoke: false,
        pets: false
    
    },
    {
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrZGUL2E5dHalmcR_--BN16XhVkU-oezkQA&s",
        nombre: "Casas en arriendo - Chillán",
        descripcion: "Hermosa casa, dos estacionamientos, tres baños, amplio jardin",
        habitaciones: "5",
        baños: "3",
        precio: "4.000",
        smoke: false,
        pets: true
    
    },
    {
        imagen: "https://homekeypropiedades.cl/wp-content/uploads/2023/08/1-2-13-scaled.jpg",
        nombre: "Arriendo Casa En Lomas San Andres",
        descripcion: "Casa en arriendo en las Lomas de San Andres, zona residencial agradable",
        ubicacion: "Lomas de san andres, Bio Bio",
        habitaciones: "6",
        baños: "4",
        precio: "2.500",
        smoke: true,
        pets: false
    
    },
    {
        imagen: "https://photos.encuentra24.com/t_or_fh_m/f_auto/v1/cl/29/40/23/60/29402360_2da75c",
        nombre: "Casa la Reina | Arriendo casa en la Reina",
        descripcion: "Hermosa casa de tres pisos. ubicado en una zona residencian tranquilo",
        ubicacion: "Condominio la Reina Concepción, Bio Bio",
        habitaciones: "4",
        baños: "4",
        precio: "4.600",
        smoke: false,
        pets: false
    
    },
]
const elementoHTML = document.querySelector(".row")
let cards2 = ""
for (let alquiler of alquileres){
    cards2+= `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.imagen}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${alquiler.nombre}
                </h5>
                <p class="card-text">
                ${alquiler.descripcion}
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${alquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.precio}</p>
                <p style="color: ${alquiler.smoke ? "green":"red"}"> ${alquiler.smoke ? '<i class="fas fa-smoking"></i>' : '<i class="fas fa-smoking-ban"></i>' } ${alquiler.smoke ? "Permitido fumar" : "Esta Prohibido fumar" }</p>
                <p style="color: ${alquiler.pets ? "green" : "red"}">${alquiler.pets ? '<i class="fas fa-paw"></i>' : '<i class="fas fa-ban"></i>'} ${alquiler.pets ?"Mascotas permitidas" : "Estan prohibidas las mascotas" }
              </div>
            </div>  
          </div>`
}
elementoHTML.innerHTML = cards2