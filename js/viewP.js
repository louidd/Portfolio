
        // Get product data from URL parameters
        const params = new URLSearchParams(window.location.search);
        document.getElementById('product-name').innerText = params.get('name');
        document.getElementById('product-image').src = params.get('image');
        document.getElementById('product-price').innerText = params.get('price');
        document.getElementById('product-qty').innerText = params.get('qty');
        document.getElementById('product-total').innerText = params.get('total');
