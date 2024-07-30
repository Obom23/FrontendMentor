const shareButton = document.querySelector(".author__share-button")
const overlay = document.getElementById("overlay")
const shareButtonImg = document.getElementById("author__share-button-img")

let isOpen = false

shareButton.addEventListener("click", () => {
  isOpen = !isOpen

  if (isOpen) {
    overlay.style.display = "flex"
    shareButtonImg.style.filter = "brightness(100)"
    shareButton.style.marginTop = "2.3em"
  } else {
    overlay.style.display = "none"
    shareButtonImg.style.filter = "brightness(0)"
    shareButton.style.marginTop = "0"
  }
})
