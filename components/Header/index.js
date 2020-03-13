// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const home = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span');

    // give elements some stuff
    date.textContent = `March 13, 2019`;
    title.textContent = `Lambda Times`;
    temp.textContent = `98°`
    // give them classes
    home.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    // put them together
    home.append(date, title, temp);
    // return home
    return home
}
// create element with component
let header = Header();
// grab the parent
const daddy = document.querySelector('.header-container');
// attach component to parent
daddy.append(header);