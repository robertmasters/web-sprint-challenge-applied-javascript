// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the good data you get back, closely.
// You will be creating a card for each article in the good.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios'


const { default: Axios } = require("axios")

const cardSelector = document.querySelector('.cards-container')

//axios call
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(good => {
        const articlesArray = Object.keys(good.data.articles)
        articlesArray.forEach(element => {
            // console.log(element)
            // console.log(good.data)
            // console.log(good.data.articles[element])
            // debugger
            good.data.articles[element].forEach(arrayElement => {
                const newCard = article(arrayElement)
                cardSelector.appendChild(newCard)
            })
        })
    })
    .catch(bad => {
        console.log(bad)
        debugger
    })


function article(articleObject){

    //creating elements
    const divCard = document.createElement('div')
    const divHeadline = document.createElement('div')
    const divAuthor = document.createElement('div')
    const divImgContainer = document.createElement('div')
    const imgAuthor = document.createElement('img')
    const spanAuthorName = document.createElement('span')

    //assigning classes 
    divCard.classList.add('card')
    divHeadline.classList.add('headline')
    divAuthor.classList.add('author')
    divImgContainer.classList.add('img-container')

    //adding content to elements
    divHeadline.textContent = articleObject.headline
    imgAuthor.src = articleObject.authorPhoto
    spanAuthorName.textContent = articleObject.spanAuthorName

    //appending
    divCard.appendChild(divHeadline)
    divCard.appendChild(divAuthor)
    divAuthor.appendChild(divImgContainer)
    divImgContainer.appendChild(imgAuthor)
    divAuthor.appendChild(spanAuthorName)

    //adding listener that console logs the headline of article
    divCard.addEventListener('click', e =>{
        console.log(articleObject.headline)
    })
    
    return divCard
}