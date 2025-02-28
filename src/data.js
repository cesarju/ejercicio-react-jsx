const data = [
  {
    nombre: "Luna",
    raza: "Labrador",
    edad: 3,
    image:
      "https://content.elmueble.com/medio/2023/05/25/cachorro-de-bichon-maltes_61209cca_230525143331_1000x1500.jpg",
    enAdopcion: true,
    fecha: "",
    ubicacionEncontrado: {
      calle: "5ta Avenida",
      numero: 123,
      ciudad: "Ciudad de Guatemala",
      provincia: "Guatemala",
      pais: "Guatemala",
    },
    estadoSalud: "Bueno",
    descripcion:
      "Luna es un perro muy amigable y juguetón. Fue encontrado abandonado en un parque.",
    contactoRescate: {
      nombre: "Refugio Esperanza",
      telefono: "+502 1234 5678",
      email: "refugio@esperanza.com",
    },
  },
  {
    nombre: "Rocky",
    raza: "Labrador",
    edad: 5,
    image:
      "https://imgs.search.brave.com/SXuyQfi9dlsHfc2vGWKBynbdVzynMALTzNbIg_xUDws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9wZXJyaXRvc18y/MzE5NzQtMTguanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
    enAdopcion: false,
    fecha: "15-03-2024",
    lugar: "Refugio Patitas Felices, Monterrey",
    ubicacionEncontrado: {
      calle: "Calle Bolívar",
      numero: 456,
      ciudad: "La Paz",
      provincia: "La Paz",
      pais: "Bolivia",
    },
    estadoSalud: "Regular",
    descripcion:
      "Rocky es una perrito tranquila y cariñosa. Fue rescatada de la calle con signos de desnutrición.",
    contactoRescate: {
      nombre: "Patitas Felices Bolivia",
      telefono: "+591 7654 3210",
      email: "patitas@felices.com",
    },
  },
  {
    nombre: "Bella",
    raza: "Bulldog",
    edad: 2,
    image:
      "https://imgs.search.brave.com/ufw2ISD9OWn64FUNeiHNfvhmq6x3uj52ilkpk5F23K0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcHVw/cHktZG9nLXBpY3R1/cmVzLTQ0Z2ZxbmZk/MHJnb3VmbTIuanBn",
    enAdopcion: true,
    fecha: "",
    lugar: "Casa de acogida, Puebla",
    ubicacionEncontrado: {
      calle: "Avenida Corrientes",
      numero: 789,
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      pais: "Argentina",
    },
    estadoSalud: "Excelente",
    descripcion:
      "Bella es un perrita fuerte y juguetón. Fue encontrado perdido en el centro de la ciudad.",
    contactoRescate: {
      nombre: "Refugio Huellitas Argentinas",
      telefono: "+54 11 9876 5432",
      email: "huellitas@argentina.com",
    },
  },
  {
    nombre: "Toby",
    raza: "Siamesa",
    edad: 4,
    image:
      "https://imgs.search.brave.com/6NziOz42zYWckiQNxQaVoSDXQ3S5FCXYD9BBir3Mfds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk2LzkxLzk1/LzM2MF9GXzk5Njkx/OTU3OV9qMkZpekNn/WGw2OWZLbmlTVHZh/cE9hbjFPeGVDdW9s/WS5qcGc",
    enAdopcion: false,
    fecha: "10-12-2023",
    lugar: "Refugio Huellitas de Amor, Querétaro",
    ubicacionEncontrado: {
      calle: "Calle San Martín",
      numero: 321,
      ciudad: "Santa Cruz de la Sierra",
      provincia: "Santa Cruz",
      pais: "Bolivia",
    },
    estadoSalud: "Bueno",
    descripcion:
      "Toby es una gata tranquila y curiosa. Fue rescatada de un edificio abandonado.",
    contactoRescate: {
      nombre: "Gatitos Bolivia",
      telefono: "+591 6789 1234",
      email: "gatitos@bolivia.com",
    },
  },
  {
    nombre: "Toby",
    raza: "Siamesa",
    edad: 4,
    image:
      "https://imgs.search.brave.com/6NziOz42zYWckiQNxQaVoSDXQ3S5FCXYD9BBir3Mfds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk2LzkxLzk1/LzM2MF9GXzk5Njkx/OTU3OV9qMkZpekNn/WGw2OWZLbmlTVHZh/cE9hbjFPeGVDdW9s/WS5qcGc",
    enAdopcion: false,
    fecha: "10-12-2023",
    lugar: "Refugio Huellitas de Amor, Querétaro",
    ubicacionEncontrado: {
      calle: "Calle San Martín",
      numero: 321,
      ciudad: "Santa Cruz de la Sierra",
      provincia: "Santa Cruz",
      pais: "Bolivia",
    },
    estadoSalud: "Bueno",
    descripcion:
      "Toby es una gata tranquila y curiosa. Fue rescatada de un edificio abandonado.",
    contactoRescate: {
      nombre: "Gatitos Bolivia",
      telefono: "+591 6789 1234",
      email: "gatitos@bolivia.com",
    },
  },
  {
    nombre: "Toby",
    raza: "Siamesa",
    edad: 4,
    image:
      "https://imgs.search.brave.com/6NziOz42zYWckiQNxQaVoSDXQ3S5FCXYD9BBir3Mfds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzk2LzkxLzk1/LzM2MF9GXzk5Njkx/OTU3OV9qMkZpekNn/WGw2OWZLbmlTVHZh/cE9hbjFPeGVDdW9s/WS5qcGc",
    enAdopcion: true,
    fecha: "10-12-2023",
    lugar: "Refugio Huellitas de Amor, Querétaro",
    ubicacionEncontrado: {
      calle: "Calle San Martín",
      numero: 321,
      ciudad: "Santa Cruz de la Sierra",
      provincia: "Santa Cruz",
      pais: "Bolivia",
    },
    estadoSalud: "Bueno",
    descripcion:
      "Toby es una gata tranquila y curiosa. Fue rescatada de un edificio abandonado.",
    contactoRescate: {
      nombre: "Gatitos Bolivia",
      telefono: "+591 6789 1234",
      email: "gatitos@bolivia.com",
    },
  },
];

export { data };
