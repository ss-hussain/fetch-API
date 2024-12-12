

let api = "https://fakestoreapi.com/products"

async function getApi(url){
    let urlResult = await fetch(url);
    let data = await urlResult.json();
    console.log(data);

    let card = ""

    data.forEach(element => {
        card +=`

        <div class="card mx-2 my-2" style="width: 15rem;">
            <div class=" box box1">
                <img src="${element.image}" class=" my-3 card-img-top" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">${element.category}</h5>
              <p class="card-text">${element.description}</p>
              <p>Rs. <del>1,500</del> <strong>${element.price}</strong></p>
              <a href="#" class="btn btn-outline-info">Add to Cart</a>
            </div>
        </div>
        `
        });
        document.getElementById("all-cards").innerHTML = card
    
}
getApi(api)