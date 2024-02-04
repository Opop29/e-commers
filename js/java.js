const product = [
   { id: 0,
    image:'./image/smile.jpg',
    title: 'smilekachu',
    price: 200,
   },
   { id: 1,
    image:'./image/naruchu.jpg',
    title: 'naruchu',
    price: 400,
   },
   { id: 2,
    image:'./image/zinichu.jpg',
    title: 'zinichu',
    price: 450,
   },
   { id: 3,
    image:'./image/ironchu.jpg',
    title: 'ironchu',
    price: 500,
   },
   { id: 4,
    image:'./image/deadchu.jpg',
    title: 'deadchu',
    price: 450,
   }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
     let i=0;
     document.getElementById('root').innerHTML = categories.map((item)=>
     {
    var {image,title,price} = item;
    return `
    <div class='box'>
        <div class='img-box'>
            <img class='images' src='${image}'></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <button onclick='addtocart(${i++})'>Add to cart</button>
        </div>
    </div>`;
}).join('');