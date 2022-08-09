// Button back to top
const $backTopButton = document.querySelector(".back-to-top-button")
document.addEventListener("scroll", () => {
  if (this.scrollY > 100) {
    $backTopButton.classList.add("show")
  } else {
    $backTopButton.classList.remove("show")
  }
})


// Highlighted services modal
const $highlightedServicesImages = document.querySelectorAll(".highlighted-services-item")
const highlightedServicesImagesLength = $highlightedServicesImages.length
$highlightedServicesImages.forEach(image => {
  image.addEventListener("click", (e) => {
    let $li = e.currentTarget
    const $image = $li.querySelector(".service-image")

    const modalOverlay = document.createElement("div")
    modalOverlay.classList.add("modal-overlay")

    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")

    const modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    modalContainer.appendChild(modalContent)

    const imageHighlighted = document.createElement("img")
    imageHighlighted.src = $image.src
    imageHighlighted.alt = $image.alt

    const previousButton = document.createElement("button")
    previousButton.classList.add("modal-previous-button")
    previousButton.innerHTML = "<span class='material-icons'>keyboard_arrow_left</span>"

    const nextButton = document.createElement("button")
    nextButton.classList.add("modal-next-button")
    nextButton.innerHTML = "<span class='material-icons'>keyboard_arrow_right</span>"

    const closeButton = document.createElement("button")
    closeButton.classList.add("modal-close-button")
    closeButton.innerHTML = "<span class='material-icons'>close</span>"

    modalContent.append(imageHighlighted, previousButton, nextButton, closeButton)

    document.body.append(modalOverlay, modalContainer)
    setTimeout(() => {
      modalContainer.classList.add("show")
    }, 150)


    // Close modal
    document.addEventListener("keydown", (e) => {
      const key = e.key
      if (key === "Escape") {
        modalContainer.remove()
        modalOverlay.remove()
      }
    })
    if (modalOverlay && closeButton) {
      [modalOverlay, closeButton].forEach(button => button.addEventListener("click", () => {
        modalContainer.remove()
        modalOverlay.remove()
      }))
    }

    // Previous and next button
    previousButton.addEventListener("click", () => {
      if ($li.previousElementSibling) {
        $li = $li.previousElementSibling
      } else {
        $li = $highlightedServicesImages[highlightedServicesImagesLength - 1]
      }

      const $previousImg = $li.querySelector(".service-image")
      imageHighlighted.src = $previousImg.src
      imageHighlighted.alt = $previousImg.alt
    })

    nextButton.addEventListener("click", () => {
      if ($li.nextElementSibling) {
        $li = $li.nextElementSibling
      } else {
        $li = $highlightedServicesImages[0]
      }

      const $nextImg = $li.querySelector(".service-image")
      imageHighlighted.src = $nextImg.src
      imageHighlighted.alt = $nextImg.alt
    })
  })
})


// Toggle menu hamburgueur
const $menuHambButton = document.querySelector(".menu-hamb-button")
$menuHambButton.addEventListener("click", () => {
  document.querySelector(".nav-bar-section > ul").classList.toggle("show")
  $menuHambButton.classList.toggle("close")
})