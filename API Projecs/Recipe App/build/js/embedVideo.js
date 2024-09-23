const embedVideo = (src) => {
    return src.replace("watch?v=", "embed/")
}

export default embedVideo

// <!-- https://www.youtube.com/watch?v=1WDesu7bUDM >>> https://www.youtube.com/embed/1WDesu7bUDM -->
