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

// creating eventlistener for Next button

document.getElementById('next').addEventListener('click', nextProfile)

// function to cycle to the next profile in the array

function nextProfile(){
    const currentProfile = profiles.next().value

    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>`
}

// profiles 
const profiles = profileIterator(data)

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