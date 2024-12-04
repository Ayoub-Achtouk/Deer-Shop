
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function updateQuantity(productName, change) {
            const product = cart.find(item => item.name === productName);

            if (product) {
                product.quantity += change;

                if (product.quantity < 1) {
                    product.quantity = 1;
                }

                product.totalPrice = product.quantity * product.price;

                localStorage.setItem('cart', JSON.stringify(cart));

                updateCart();
            }
        }

        function removeFromCart(productName) {
            const productIndex = cart.findIndex(item => item.name === productName);

            if (productIndex !== -1) {
                cart.splice(productIndex, 1);

                localStorage.setItem('cart', JSON.stringify(cart));

                updateCart();
            }
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            let total = 0;

            cartItems.innerHTML = `
                <tr>
                    <th>Image</th>
                    <th>Produit</th>
                    <th>Prix Unitaire</th>
                    <th>Quantité</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            `;

            cart.forEach(item => {
                const row = document.createElement('tr');
                total += item.totalPrice;

                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                    <td>${item.name}</td>
                    <td>${item.price} DH</td>
                    <td>
                        <button class="button" onclick="updateQuantity('${item.name}', -1)">-</button>
                        ${item.quantity}
                        <button class="button" onclick="updateQuantity('${item.name}', 1)">+</button>
                    </td>
                    <td>${item.totalPrice} DH</td>
                    <td>
                        <button class="button" class="remove-btn" onclick="removeFromCart('${item.name}')">Supprimer</button>
                    </td>
                `;

                cartItems.appendChild(row);
            });

            document.getElementById('total-price').textContent = total;
        }

        updateCart();
        
