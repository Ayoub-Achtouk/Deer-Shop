function addToCart(productName, productPrice, productImage) { 
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

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
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} a été ajouté au panier.`);
}
