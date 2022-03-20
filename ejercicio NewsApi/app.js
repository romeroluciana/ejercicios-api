const APY_KEY = 'e9886a73f6564db78b029d2da215365f'
                 

let cardContainer = document.querySelector('#container')
const PAGE_SIZE = 12
let page =1
const btnNext= document.querySelector('#btnNext')
const btnPrevious= document.querySelector('#btnPrevious')



const renderCards = async() => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ar&category=technology&page=${page}&pageSize=${PAGE_SIZE}&apiKey=${APY_KEY}`)

    const data = await response.json()

    lastPage = Math.ceil(data.totalResults/PAGE_SIZE);

    let cardHtml = ''

    for (const article of data.articles) {
        cardHtml += ` <div class="card">
        <img
          src="${article.urlToImage}"
          alt=""
        />
        <div class="info">
          <a
            href="${article.url}"
            target="_blank"
            rel="noopener noreferrer"
            ><h3 class="info_title">
              ${article.title}
            </h3>
          </a>
        
          <p class="info_description">
           ${article.description}
          </p>
        </div>
        </div>`
   
}
 
 cardContainer.innerHTML = cardHtml


}

renderCards()

btnNext.addEventListener('click',() =>{
  if(page < lastPage){
    page++
    renderCards()
  }

  if(page > 1){
    btnPrevious.classList.remove('btn--disabled')
  }

  if(page >= lastPage){
    btnNext.classList.add('btn--disabled')
  }
})

btnPrevious.addEventListener('click',() =>{
  if(page < lastPage){
    page--
    renderCards()
  }
  if(page <= 1){
    btnPrevious.classList.add('btn--disabled')
  }

  if(page <= lastPage){
    btnNext.classList.remove('btn--disabled')
  }

})