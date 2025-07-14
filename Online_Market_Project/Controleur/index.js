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
        const table_produits= produits.Array
        if (!Array.isArray(produits)) {
            const table_produits= Array.isArray(produits)
        }

    })/*
    fetch("http://localhost:8080/info_produit/produits", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nom_produit: "Plat",
        quantite_produit: "49.99",
        prix_produit:"40.00",
        url_image:"jdskfghjsdjk"
    })
    })
.then(response => response.json())
.then(data => console.log("Produit ajouté :", data))
.catch(error => console.error("Erreur :", error))*/);

//Méthode qui ajoute un produit
/*
fetch("http://localhost:8080/info_produit/produits", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nom_produit: "Cuillère",
        quantite_produit: "49.99",
        prix_produit:"40.00",
        url_image:"jdskfghjsdjk"
    })
})
.then(response => response.json())
.then(data => console.log("Produit ajouté :", data))
.catch(error => console.error("Erreur :", error));
*/