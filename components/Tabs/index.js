// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    // go into object and loop over array
    response.data.topics.forEach(index => {
        // append each item in the array to the parent element
        tabDaddy.append(TabComponent(index))
    })
})
.catch(error => {
    console.log('The data was not recieved:', error)
})

function TabComponent(item){
    const topic = document.createElement('div')
    // give contents
    topic.textContent = item
    // give class
    topic.classList.add('tab');
    // retun topic
    return topic
}

// get parent
const tabDaddy = document.querySelector('.topics')
