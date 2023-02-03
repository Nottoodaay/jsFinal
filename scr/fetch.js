
let data = [];

const container = document.querySelector(".container")

let fetchData = (skip) =>{
fetch(`https://dummyjson.com/products?limit=9&skip=${skip}`) 
    .then(res=>res.json())
    .then(dataFromFetch=> {
        data = dataFromFetch.products
        data.forEach(element => {
            
            container.innerHTML=
                container.innerHTML+

                `
                <div class="article" id="${element.id}">
                <div class="img">
                    <img src="${element.images[0]}" alt="Img">
                </div>

                <div class="innerContainer">
                    <div class="title">
                        <p>${element.category}</p>
                        <h3>${element.title}</h3>
                    </div>
                    <div class="description">
                    <p>${element.description}</p>
                </div>
                </div>
                
            </div>
                `
                
        });
        
    let article = document.querySelectorAll(".article")

    article.forEach(e=>{
        e.addEventListener("click",()=>{
            console.log(data[e.id-1])
            container.innerHTML = ""

            container.innerHTML = container.innerHTML + `
            <div class="detailsPage">
            <div class="detailsPageTitle">
                <h4>${data[e.id-1].title}</h4>
                <p>${data[e.id-1].description}</p>
            </div>
            <div class="detailsPageFristImg">
                <img src="${data[e.id-1].images[0]}" alt="${data[e.id-1].title}">
                <p>${data[e.id-1].description}</p>
            </div>
            <div class="detailsPageSecondImg">
                <img src="${data[e.id-1].images[1]}" alt="${data[e.id-1].title}">
                <img src="${data[e.id-1].images[2]}" alt="${data[e.id-1].title}">
                <p>${data[e.id-1].description}</p>
            </div>
        </div>    
            `
        })
    })
    
    
   

    
    })

}

fetchData(0)


const first = document.getElementById("firstPage")
const second = document.getElementById("secondPage")
const third = document.getElementById("thirdPage")
const four = document.getElementById("fourthPage")



first.addEventListener("click",()=>{
    container.innerHTML = ""
    fetchData(0)
    
    first.classList.add("active")
    second.classList.remove("active")
    third.classList.remove("active")
    four.classList.remove("active")
})

second.addEventListener("click",()=>{
    container.innerHTML = ""
    fetchData(9)

    first.classList.remove("active")
    second.classList.add("active")
    third.classList.remove("active")
    four.classList.remove("active")
})

third.addEventListener("click",()=>{
    container.innerHTML = ""
    fetchData(18)

    first.classList.remove("active")
    second.classList.remove("active")
    third.classList.add("active")
    four.classList.remove("active")
})

four.addEventListener("click",()=>{
    container.innerHTML = ""
    fetchData(27)

    first.classList.remove("active")
    second.classList.remove("active")
    third.classList.remove("active")
    four.classList.add("active")
})

