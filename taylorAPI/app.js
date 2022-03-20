const container = document.getElementById("container")
const btn = document.getElementById("btn");
const img = document.getElementById("container-image");
const bgColor = document.getElementById("quote-container") 

const getInfo = async () => {
  const res = await fetch("https://taylorswiftapi.herokuapp.com/get");
  return await res.json()
}

const changeLyrics = (data) => {
  container.innerHTML = `
  <div class="quote-text animated rotateInDownRight">${data.quote}.</div>
  <div class="quote-author animated lightSpeedIn">- ${data.song}, ${data.album}</div>
    `
}

const changeImage = (data) => {
  switch (data.album) {
    case "Taylor Swift":
      img.style.backgroundImage = "url(https://m.media-amazon.com/images/I/71LVEINqZaL._SL1200_.jpg)";
      bgColor.style.background ="#2d828daf"
      break;
    case "Fearless":
      img.style.backgroundImage = "url(https://i.pinimg.com/736x/22/2c/b3/222cb3ca98dd9c4059bdcebd7c5c4947.jpg)";
      bgColor.style.background ="#8d702daf"
      break;
    case "Speak Now": 
      img.style.backgroundImage = "url(https://i.pinimg.com/736x/27/8b/05/278b056aa03726bd9e43ecfe2c890cc8--taylor-swift-speak-now-album-cover.jpg)";
      bgColor.style.background ="#99268faf"
      break;
    case "Red":
      img.style.backgroundImage = "url(https://media.interaksyon.com/wp-content/uploads/2021/06/taylor-swift-red-640x427.jpg)";
      bgColor.style.background ="#8d2d2daf"
      break;
    case "1989": 
      img.style.backgroundImage = "url(https://media.s-bol.com/ZzKyXryR5j5R/550x550.jpg)";
      bgColor.style.background ="#0f2438af"
      break;
    case "Reputation": 
      img.style.backgroundImage = "url(https://www.plasticosydecibelios.com/wp-content/uploads/2017/11/standard-cover-grayscale-Taylor-Swift-reputation.jpg)";
      bgColor.style.background ="#242424af"
      break;
    case "Lover": 
      img.style.backgroundImage = "url(https://static.wikia.nocookie.net/ba65e255-3bdf-4670-8f46-053bc986359e/scale-to-width/370)";
      bgColor.style.background ="#faa8ceaf"
      break;
    case "Folklore": 
      img.style.backgroundImage = "url(https://m.media-amazon.com/images/I/71P7AdnpHrS._AC_SL1500_.jpg)";
      bgColor.style.background ="#7c787aaf"
      break;
    case "Evermore": 
      img.style.backgroundImage = "url(https://http2.mlstatic.com/D_NQ_NP_972447-MLA44474837484_012021-O.webp)";
      bgColor.style.background ="#6b4d15af"
      break;
  }
}

const renderInfo = async () => {
  const data = await getInfo()
  changeLyrics(data);
  changeImage(data);
}


btn.addEventListener("click", renderInfo);

renderInfo()
