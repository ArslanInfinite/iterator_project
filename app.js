const data = [
    {
        name: 'John Doe', 
        age: 32, 
        gender: 'male', 
        lookingFor: 'female',
        location: 'New York City',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }, 
    {
        name: 'Jen Smith', 
        age: 30, 
        gender: 'female', 
        lookingFor: 'male',
        location: 'Miami',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    }, 
    {
        name: 'William Johnson', 
        age: 38, 
        gender: 'male', 
        lookingFor: 'female',
        location: 'Las Vegas',
        image: 'https://randomuser.me/api/portraits/men/80.jpg'
    }, 
]

// profile iterator 

function profileIterator(profiles){
    let nextIndex = 0
    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true}
        }
    }
}