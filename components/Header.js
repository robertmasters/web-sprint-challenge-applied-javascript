// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
    let mainDiv = document.createElement('div')
    let spanDate = document.createElement('span')
    let h1Lambda = document.createElement('h1')
    let spanTemp = document.createElement('span')

    mainDiv.classList.add('header')
    spanDate.classList.add('date')
    spanTemp.classList.add('temp')

    spanDate.textContent = 'MARCH 28, 2020'
    h1Lambda.textContent = 'Lambda Times'
    spanTemp.textContent = '98°'

    mainDiv.appendChild(spanDate)    
    mainDiv.appendChild(h1Lambda)
    mainDiv.appendChild(spanTemp)

    return mainDiv
}

const mainBody = document.querySelector('.header-container')
mainBody.appendChild(Header())
