
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const btn = document.querySelector("#btn")


const changeImg = async () => {
    const response1 = await fetch("https://api.thecatapi.com/v1/images/search");
    const [data1] = await response1.json()
    
    const response2 = await fetch("https://api.thecatapi.com/v1/images/search");
    const [data2] = await response2.json()
    
    img1.src = data1.url
    img2.src = data2.url
}
changeImg();

btn.addEventListener("click", changeImg);

/*
const changeImg2 = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const [data] = await response.json()
    
    img2.src = data.url

}


changeImg();
changeImg2();

btn.addEventListener("click", changeImg);
btn.addEventListener("click", changeImg2);

   */