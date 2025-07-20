//Déclaration des variables qui stockeront les produits
let div_produit= document.getElementById("produits")
if(div_produit){
var table_produits_dom= Array.from(div_produit.children)


//Déclaration de la page acceuil
const page_acceuil= document.title;
if (page_acceuil=="UTOPIA MARKET") {

   /*
    //Méthode pour supprimer un produit
    fetch("http://localhost:8080/info_produit/produits/36",{
          method:"DELETE"  
        }
    ).then(res=>{
        if (res.ok) {
            console.log("Produit supprimé avec succèqs")
        }else{console.log("une erreur est survenue lors de la suppression")}
    }).catch(error=>{console.error(error)} )
    */
    

//Méthode qui recupère tous le tableau des produits
document.addEventListener('DOMContentLoaded',    
    fetch("http://localhost:8080/info_produit/produits")
    .then(response =>{ 
            if (!response.ok) {
               throw new console.error();
            }
        return response.json()
    })
    .then(produits=>{
        const table_produits= Object.values(produits)
        const nbr_prod= table_produits.length

        
        
        for (let index = nbr_prod-1; index >= 0; index--) {
            
                const prod_aleatoire = Math.floor(Math.random()*(index+1));                          
                [table_produits[index],table_produits[prod_aleatoire]]=[table_produits[prod_aleatoire],table_produits[index]];
                    
            
        }

        const nbr_prod_final = Math.min(table_produits_dom.length,nbr_prod)
        for(let i = 0;i<nbr_prod_final; i++){
            const prod_individuel=table_produits_dom[i] 
            
                img_prod= prod_individuel.querySelector("img")               
                nom_prod= prod_individuel.querySelector("h1") 
                prix_prod= prod_individuel.querySelector("p");

                

                img_prod.src =table_produits[i].url_image
                nom_prod.innerText =table_produits[i].nom_produit
                prix_prod.innerText= "Prix: "+table_produits[i].prix_produit+"$";
                
        }

    })
   
    );
    console.log(table_produits_dom)
    table_produits_dom.forEach(produit => {
    const img_produit=produit.querySelectorAll('img')
    img_produit.forEach(img => {
        img.addEventListener("click",vers_info_prod)
    });
    
});
}

}
 
 /*Quend on clique sur un produit page qui contient tous le les info 
                sur un produit et le bouton commander*/
function vers_info_prod(event) {
    
    prod= event.target.parentElement;
    img_prod= prod.querySelector("img")
    nom_prod= prod.querySelector("h1")
    prix_prod= prod.querySelector("p");

    window.location.href= `page_info_produit.html?nom=${nom_prod.innerText}&prix=${prix_prod.innerText}&url_image=${img_prod.src}`;

}


    //Méthode qui ajoute un produit
/*
fetch("http://localhost:8080/info_produit/produits", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nom_produit: "Verre à dégustation (Model:EJ5202)",
        quantite_produit: "494",
        prix_produit:"40.00",
        url_image:"images/images_produits/verre_a_degustation_modele_EJ5201.jpg"
    })
    })
.then(response => response.json())
.then(data => console.log("Produit ajouté :", data))
.catch(error => console.error("Erreur :", error))
*/
