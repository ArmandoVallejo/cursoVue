fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json() )
    .then( data => {
        //console.log(data.results);
        data.results.forEach(element => {
            //console.log(element.name);
        });
    })
    .catch( error => console.log(error));


//async y await
//await funciona siempre y cuando este en una funcion async
const obtenerPokemones = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        //console.log(data);
        const arrayNombres = data.results.filter( poke => poke.name !== 'bulbasaur')

        console.log(arrayNombres);
    } catch (error){
        console.log(error);
    }
}

obtenerPokemones()    