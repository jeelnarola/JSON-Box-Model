
let products=JSON.parse(localStorage.getItem("pro"))||[]
const disply=(dat)=>{
    document.getElementById("output").innerHTML=""
    dat.map((ele)=>{
        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img")
        let title=document.createElement("h1")
        title.setAttribute("class","h1")
        title.innerHTML=ele.title
        let price=document.createElement("h2")
        price.innerHTML=`$ ${ele.price}`
        price.setAttribute("class","cetagory")
        let price2=document.createElement("p")
        price2.innerHTML=`$${ele.price}`
        price2.setAttribute("class","price2")        
        let button=document.createElement("button")
        button.innerHTML=`add to cart`
        button.setAttribute("class","button")
        let div=document.createElement("div")
        div.append(img,title,price,price2,button)
        div.setAttribute("id","div")
        document.getElementById("output").append(div)
    })

}
const product=(e)=>{
    e.preventDefault();
    let data={
        img:document.getElementById("img").value,
        title:document.getElementById("name").value,
        price:document.getElementById("price").value
    }
    console.log(data)
    products.push(data)
    localStorage.setItem("pro",JSON.stringify(products))
    disply(products)
}
disply(products)

    // call function product
    
document.querySelector("form").addEventListener("submit",product)