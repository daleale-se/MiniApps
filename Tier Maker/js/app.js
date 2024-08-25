
const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

function createItem(src, id) {    
    const imgElement = document.createElement("img")
    imgElement.draggable = true
    imgElement.src = src
    imgElement.dataset.id = id
    imgElement.className = "item-image"
    
    imgElement.addEventListener("dragstart", handleDragStart)
    imgElement.addEventListener("dragend", handleDragEnd)

    itemsSection.appendChild(imgElement) 
    return imgElement
}

function useFilesToCreateItem(files) {
    if (files && files.length > 0) {
        Array.from(files).forEach(file => {
            // investigar que hace el FileReader()
            const reader = new FileReader()
            reader.onload = (eventReader) => {
                createItem(eventReader.target.result, String(file.lastModified))
            }
            reader.readAsDataURL(file)
        })
    }
}

const imageInput = $("#image-input")
const itemsSection = $("#selector-items")
const resetButton = $("#reset-tier-button")
const saveButton = $("#save-tier-button")

imageInput.addEventListener("change", (event) => {            
    const [...files] = event.target.files

    // or 
    // const { files } = event.target
    // Array.from(files).forEach(file => {...})
    if (!repeatedImage(files)){ 
        useFilesToCreateItem(files)
    }
})

itemsSection.addEventListener("drop", handleDrop)
itemsSection.addEventListener("dragover", handleDragOver)
itemsSection.addEventListener("dragleave", handleDragLeave)
itemsSection.addEventListener("drop", handleDropFromDesktop)
itemsSection.addEventListener("dragover", handleDragOverFromDesktop)

function handleDragOverFromDesktop(event) {

    event.preventDefault()

    const { currentTarget, dataTransfer } = event

    if (dataTransfer.types.includes("Files")) {
        currentTarget.classList.add("drag-files")
    }
    
}

function repeatedImageFromDesktop(files) {
    const imgItems = $$("#selector-items img")
    let isRepeated = false
    if (imgItems) {
        Array.from(files).forEach(file => {
            imgItems.forEach(item => {
                if (item.dataset.id === String(file.lastModified)) {
                    isRepeated = true
                }
            })
        })
    }
    return isRepeated
}

function handleDropFromDesktop(event) {
    event.preventDefault()
    
    const { currentTarget, dataTransfer } = event
    
    if (dataTransfer.types.includes("Files") && dataTransfer.getData("text/plain") === "") {
        currentTarget.classList.remove("drag-files")
        const { files } = dataTransfer
        const isRepeated = repeatedImageFromDesktop(files)
        if (!isRepeated) {
            useFilesToCreateItem(files)
        }
    }
}

let draggedElement = null
let sourceContainer = null

const rows = $$(".tier .row")

rows.forEach(row => {
    row.addEventListener("drop", handleDrop)
    row.addEventListener("dragover", handleDragOver)
    row.addEventListener("dragleave", handleDragLeave)
})

function handleDrop(event) {

    event.preventDefault()

    // investigar sobre event.dataTransfer
    const { currentTarget, dataTransfer } = event

    // viene de algun sitio y arrastramos un elemento
    if (sourceContainer && draggedElement) {
        sourceContainer.removeChild(draggedElement)
    }

    // const isRepeated = imageAlreadyAdded(draggedElement.dataset.id)
    // console.log(isRepeated);

    if (draggedElement) {
        const src = dataTransfer.getData("text/plain")
        const id = dataTransfer.getData("id")
        const imgElement = createItem(src, id)        
        currentTarget.appendChild(imgElement)
    }

    currentTarget.classList.remove("drag-over")
    //console.log("drop")

    currentTarget.querySelector(".drag-preview")?.remove()
}

function handleDragOver(event) {

    event.preventDefault()
    const { currentTarget } = event
    if (sourceContainer === currentTarget) return

    currentTarget.classList.add("drag-over")
    const dragPreview = document.querySelector(".drag-preview")

    if (draggedElement && !dragPreview) {
        const previewElement = draggedElement.cloneNode(true)
        previewElement.classList.add("drag-preview")
        currentTarget.appendChild(previewElement)
    }

    // console.log("drag over")
}

function handleDragLeave(event) {

    event.preventDefault()

    const { currentTarget } = event

    currentTarget.classList.remove("drag-over")
    // console.log("drag leave")
    currentTarget.querySelector(".drag-preview")?.remove()

}

function handleDragStart(event) {
    // console.log("drag start")
    draggedElement = event.target
    sourceContainer = draggedElement.parentNode
    event.dataTransfer.setData("text/plain", draggedElement.src)
    event.dataTransfer.setData("id", draggedElement.dataset.id)
}

function handleDragEnd(event) {
    // console.log("drag end")
    draggedElement = null
    sourceContainer = null
}

resetButton.addEventListener("click", () => {
    const items = $$(".tier .item-image")
    items.forEach(item => {
        item.remove()
        itemsSection.appendChild(item)
    })
})

saveButton.addEventListener("click", () => {
    const tierContainer = $(".tier")
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
                
    import("https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/dist/html2canvas-pro.min.js")
    .then(({dafault: html2canvas}) => {
        html2canvas(tierContainer).then(canvas => {
            ctx.drawImage(canvas, 0, 0)
            const imgURL = canvas.toDataURL("image/png")
            const downloadLink = document.createElement("a")
            downloadLink.download = "tier.png"
            downloadLink.href = imgURL
            downloadLink.click()
        })
    })
})