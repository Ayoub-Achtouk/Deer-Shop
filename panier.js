
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function updateQuantity(productName, change) {
            const product = cart.find(item => item.name === productName);

            if (product) {
                product.quantity += change;

                // Empêcher les quantités négatives
                if (product.quantity < 1) {
                    product.quantity = 1;
                }

                product.totalPrice = product.quantity * product.price;

                // Sauvegarder le panier dans localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Mettre à jour l'affichage
                updateCart();
            }
        }

        function removeFromCart(productName) {
            const productIndex = cart.findIndex(item => item.name === productName);

            if (productIndex !== -1) {
                cart.splice(productIndex, 1);

                // Sauvegarder le panier dans localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Mettre à jour l'affichage
                updateCart();
            }
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            let total = 0;

            // Réinitialiser le tableau en ne gardant que l'en-tête
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

            // Ajouter chaque élément du panier
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

            // Mettre à jour le prix total
            document.getElementById('total-price').textContent = total;
        }

        // Charger et afficher le panier au chargement de la page
        updateCart();
        /*
       
let cart = JSON.parse(localStorage.getItem('cart')) || [];


        function removeFromCart(productName) {
            const productIndex = cart.findIndex(item => item.name === productName);

            if (productIndex !== -1) {
                const product = cart[productIndex];
                cart.splice(productIndex, 1);

                // Sauvegarder le panier dans localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Mettre à jour l'affichage
                updateCart();
            }
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            let total = 0;

            // Réinitialiser le tableau en ne gardant que l'en-tête
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

            // Ajouter chaque élément du panier
            cart.forEach(item => {
                const row = document.createElement('tr');
                total += item.totalPrice;

                row.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" width="50"></td>
                    <td>${item.name}</td>
                    <td>${item.price}€</td>
                    <td>${item.quantity}</td>
                    <td>${item.totalPrice}€</td>
                    <td>
                        <button onclick="removeFromCart('${item.name}')">Supprimer</button>
                    </td>
                `;

                cartItems.appendChild(row);
            });

            // Mettre à jour le prix total
            document.getElementById('total-price').textContent = total;
        }

        // Charger et afficher le panier au chargement de la page
        updateCart();
        */
