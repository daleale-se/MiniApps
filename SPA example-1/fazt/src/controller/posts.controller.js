import views from "../views/posts.html"

const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return await response.json()
}

const displayPost = (post, postsContainer) => {
    const postLi = `
        <li class="list-group-item border-primary bg-dark text-white">
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        </li>
    `
    postsContainer.innerHTML += postLi
}

const displayTotalPost = (postNumber, postsContainer) => {
    const subtitle = document.createElement("h2")
    subtitle.textContent = "total posts: " + postNumber
    postsContainer.appendChild(subtitle)
}

export default async () => {
    
    const divContainer = document.createElement("div");
    divContainer.innerHTML = views;
    
    const postsContainer = divContainer.querySelector("#posts-container")
    const loadingSubtitle = divContainer.querySelector("h2")
    const posts = await getPosts() 
    loadingSubtitle.remove()

    displayTotalPost(posts.length, postsContainer)
    posts.forEach(post => displayPost(post, postsContainer));

    return divContainer

}