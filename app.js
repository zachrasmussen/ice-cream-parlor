const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}, {
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Choclate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

let orders = []

function drawMenu() {
    let template = ''
    iceCream.forEach(item => {
        template += `
        <div class="col-3 p-2 m-2 card" onclick="order('${item.name}')">
            <img class="img-fluid parolor" src="${item.image}"
            <div class="justify-content-evenly text-center p-2">
                <p><span>${item.name}</span> <span>$${item.price}</span></p>
            </div>
        </div>`
    })
    let menuElm = document.getElementById('menu-items')
    menuElm.innerHTML = template
}
drawMenu()

function drawOrders() {
    let template = ''
    orders.forEach((order, i) => template += `
    <div class="col-12 order-item" onclick="deleteItem(${i})">
         <p><span>${order.name}</span> - <span>$${order.price}</span></p>   
    </div>
    `)
    let orderElm = document.getElementById('order-items')
    orderElm.innerHTML = template
    drawTotal()
}

function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')
    subtotal *= 1.06
    totalElm.innerText = subtotal.toFixed(2)
}

function order(selectedName) {
    console.log('ordering', selectedName);
    let foundIceCream = iceCream.find(iceCream => iceCream.name == selectedName)
    console.log(foundIceCream);
    orders.push(foundIceCream)
    console.log('current Orders', orders);
    drawOrders()
}

function clearOrders() {
    orders = []
    drawOrders()
}
