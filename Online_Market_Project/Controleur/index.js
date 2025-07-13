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
