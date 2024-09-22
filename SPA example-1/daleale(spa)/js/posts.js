const displayPost = ({ body, title }) => {
    const postsContainer = document.getElementById("posts")
    const postLi = document.createElement("li")
    const postTitle = document.createElement("h3")
    postTitle.textContent = title
    const postBody = document.createElement("p")
    postBody.textContent = body
    postLi.append(postTitle, postBody)
    postsContainer.appendChild(postLi)
}

export function init () {
    
    fetch(`${"https://jsonplaceholder.typicode.com"}/posts`)
    .then(response => response.json())
    .then(posts => {
        const loadingSubtitle = document.querySelector("h2")
        loadingSubtitle.remove()
        for (const post of posts) {
            displayPost(post)
        }
    })

}