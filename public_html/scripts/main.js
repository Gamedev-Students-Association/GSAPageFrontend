/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
async function parseJSON(){
    const url = "https://api.sampleapis.com/coffee/hot";
    
    try{
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Response status: ${response.status}');
        }
        
        
        const coffee = await response.json();
        console.log(coffee);
        
        let newArticle;
        const part = document.getElementsByClassName("content")[0];
        
        for(const coffeeItem of coffee){
            newArticle = `<h2>${coffeeItem.title}</h2>`;
            newArticle += `<p>${coffeeItem.description}<\p>`;
            newArticle += `<hr class="articleBreak">`;
            
            part.insertAdjacentHTML("beforeend",newArticle);
        }
        
    }catch(error) {
        console.error(error.message);
    }
    
    
}

parseJSON();
