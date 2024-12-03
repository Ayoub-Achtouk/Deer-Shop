function addToCart(productName, productPrice, productImage) {
    // Charger le panier depuis localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Vérifier si le produit existe déjà dans le panier
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.totalPrice += productPrice;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1,
            totalPrice: productPrice,
            image: productImage
        });
    }

    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} a été ajouté au panier.`);
}
