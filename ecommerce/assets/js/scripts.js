// toggle sidebar
const sidebarToggler = document.querySelector('.menu-toggler');
const sidebar = document.querySelector('.sidebar');

sidebarToggler.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})

// toggle cart menu
const cartBtn = document.querySelector('.cart');
const rightSidebar = document.querySelector('.right-sidebar');

cartBtn.addEventListener('click', function() {
    rightSidebar.classList.toggle('active');
})

function renderProducts(products) {
    products.forEach(product => {
        const url = product.imgSrc;
        const imgAlt = url.substring(url.lastIndexOf('/')+1).split('.')[0]
        let html = `<div class="col">
            <div class="card" id='${product.id}'>
                <div class="card-header">
                    <img src="${product.imgSrc}" alt="${imgAlt}">
                </div>
                <div class="card-body">
                    <h3 class="title">${product.title}</h3>
                    <button class="btn btn-orange add-cart">Add to cart</button>
                    <div class="product-actions d-none">
                        <button class="decrease-quantity btn btn-orange" onclick="decreaseQuantity(this)">-</button>
                            <input type="number" class="quantity" value="1" />
                        <button class="increase-quantity btn btn-orange" onClick="increaseQuantity(this)">+</button>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="price">$${product.price}</span>
                </div>
            </div>
        </div>`;
        $('#products').append(html);
    });
}

let cart = [];

// calculating cart items total price
function cartTotal(cart) {
    // show cart total
    $('.cart-total').removeClass('d-none');
    const total = cart.reduce((accumulator, product) => accumulator + parseInt(product.price.replace('$', '')), 0);
    $('.cart-total .total').text('$'+total);
}


function addTocart() {
    const $rightSidebar = $('.right-sidebar .items');
    // empty cart sidebar
    $rightSidebar.empty();

    var cartMenu_HTML;
    cart.forEach(item => {
        cartMenu_HTML = `<div class="item" id="item-${item.id}">
            <div class="media">
                <div>
                    <img src="${item.imgSrc}" alt="camera">
                </div>
                <div>
                    <h4>${item.title}</h4>
                </div>
            </div>
            <div class="price">${item.price}</div>
        </div>
        <div>`;
        $rightSidebar.append(cartMenu_HTML);
        localStorage.setItem('cart', JSON.stringify(cart));
    });

    // calculate cart total
    cartTotal(cart);
}

function increaseQuantity(btn) {
    let quantity = $(btn).siblings('.quantity');
    let price = $(btn).parents('.card').find('.price').text().replace('$', '');
    const id = $(btn).parents('.card').attr('id');
    // if(quantity.val() > 0) {
    quantity.val(parseInt(quantity.val()) + 1);
    // }
    
    const updatedPrice = quantity.val() * price;
    const updatedCart = cart.map(item => 
        {
            return item.id == id ? {...item, quantity: quantity.val(), price: '$'+updatedPrice+''} : item;
        }
    )
    cart = updatedCart;
    
    // adding more quantity to the cart
    addTocart();
}

function decreaseQuantity(btn){
    let $btn = $(btn);
    const id = $btn.parents('.card').attr('id');
    var quantity = $btn.siblings('.quantity');
    let price = $btn.parents('.card').find('.price').text().replace('$', '');

    quantity.val() > 0 && quantity.val(quantity.val() - 1);

    const updatedPrice = quantity.val() * price;
    const updatedCart = cart.map(item => 
        {
            return item.id == id ? {...item, quantity: quantity.val(), price: '$'+updatedPrice+''} : item;
        }
    )
    cart = updatedCart;

    if(quantity.val() < 1) {
        // hide increase decrease buttons
        $btn.parent().addClass('d-none');
        // show add to cart button
        $btn.parent().siblings('.add-cart').removeClass('d-none');

        // find the id of the item in the cart
        const item = cart.findIndex(item => item.id == id);

        // remove the item from cart at specific index
        cart.splice(item, 1);

        // also remove the item from cart menu
        $('#item-'+id).remove();

        // update no# of items in cart
        $('.count').text(cart.length);

        // if cart length is zero then hide cart count
        if(cart.length === 0) {
            $('.count').addClass('d-none');
            $('.right-sidebar .items').text('No Items');

            // hide cart total
            $('.cart-total').addClass('d-none');
            
            // remove cart from local storage
            localStorage.removeItem('cart');
        }
        $(quantity).val(1);
    }
    
    // decreasing product quantity from the cart
    if(cart.length > 0) {
        addTocart();
    }
}

$(function() {
    if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addTocart();
        $('.count').removeClass('d-none');
        $('.count').text(cart.length);
    }
    // render products
    $.ajax({
        type: 'GET',
        url: './apis/products.json',
        success:function(products) {
            renderProducts(products);
            cart.forEach(element => {
                let item = $('#'+element.id);
                item.find('.product-actions').removeClass('d-none');
                item.find('.add-cart').addClass('d-none');
                item.find('.quantity').val(element.quantity);
            });
        },
        error:function(error) {
            console.log(error);
        }
    })

    // add to cart functionality
    $(document).on('click', '.add-cart', function() {
        const $cartBtn = $(this);
        const $card = $cartBtn.parents('.card');
        const id = $card.attr('id');
        const title = $card.find('.title').text();
        const price = $card.find('.price').text();
        const quantity = $card.find('.quantity').val();
        const imgSrc = $card.find('img').attr('src');

        const product = {
            id: id,
            title: title,
            price: price,
            quantity: quantity,
            imgSrc: imgSrc
        }

        // add item to the cart array
        cart.push(product);

        // show no# of items in cart
        $('.count').removeClass('d-none');
        $('.count').text(cart.length);

        // hide add to cart button on click
        $cartBtn.addClass('d-none');

        // show quantity increase and decrease buttons
        $cartBtn.siblings('.product-actions').removeClass('d-none');

        // showing cart items in cart menu
        addTocart();
    })
    
    $(window).scroll(function(){
        let position = Math.round($(window).scrollTop());
        
        if(position > 150) {
            $('body').addClass('active');
        } else {
            $('body').removeClass('active');
        }
    })
})