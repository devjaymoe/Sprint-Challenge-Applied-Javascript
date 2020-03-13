// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// grab parent from dom
const cardDaddy = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  //console.log(response.data.articles)
  return topicsArray = (Object.values(response.data.articles))
})
.then(topicsArray => {
    topicsArray.forEach(element=>{
        element.forEach(cardObject=>{
            cardDaddy.append(CardComponent(cardObject))
        })
    })
})
.catch(error => {
  console.log('The data was not recieved:', error)
})

function CardComponent(object){
    const home = document.createElement('div'),
          headline = document.createElement('div'),
          authorContainer = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          authorName = document.createElement('span');
    // give elements stuff
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    authorName.textContent = object.authorName;
    // give elements classes
    home.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');
    // put the elements together
    home.append(headline, authorContainer);
    authorContainer.append(imgContainer, authorName);
    imgContainer.append(img);
    // return home
    return home
}