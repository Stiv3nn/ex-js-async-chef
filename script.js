// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:

// Recuperare la ricetta da https://dummyjson.com/recipes/{id};
// Estrarre la proprietà userId dalla ricetta;
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId};
// Restituire la data di nascita dello chef;

// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:

// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch

async function getChefBirthday(id){
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeResponse.json();
    // console.log(recipe);
    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
    const chef = await chefResponse.json();
    // console.log(chef);
    return chef.birthDate;
}


(async() => {
    try{
        const birthday = await getChefBirthday(1);
        console.log('Data di nascita dello chef:', birthday);
    } catch(error){
        console.error('Errore:', error.message);
    }
    console.log('Fine del codice');
    
})();

// getChefBirthday(1)
//     .then(birthday => console.log("Data di nascita dello chef:", birthday))
//     .catch(error => console.error("Errore:", error.message))
//     .finally(() => console.log("Fine"))






// const getChefBirthday = async (id) => {
    
//     let recipe;
//     try{
//         recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);
//     }catch(error){
//         throw new Error(`Non posso recuperare recipe id ${id}`);
//     }

//     if(recipe.message){
//         throw new Error(recipe.message)
//     }

//     let user;
//     try{
//         user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
//     }catch(error){
//         throw new Error(`Non posso recuperare userId ${recipe.userId}`);
//     }

//     if(user.message) {
//         throw new Error(user.message)
//     }

//     return {...recipe, user}
// }