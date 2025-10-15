const web = {
    nombre: "www.bluuweb.cl",
    links: {
        home: "www.bluuweb.cl/home",
        cursos: "www.bluuweb.cl/cursos",
        contacto: "www.bluuweb.cl/contacto"
    },
    redes: {
        youtube:{
            nombre: "Bluuweb",
            link: "www.youtube.com/bluuweb"
        }
    }
}

const {link} = web.redes.youtube;
console.log(link);