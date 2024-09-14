const loadHeader = async () => {
    await fetch("header.html") 
    .then(response => response.text()) 
    .then(view => document.querySelector("header").innerHTML = view); 
}

export default loadHeader