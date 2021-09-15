let popupBtns = document.querySelectorAll("button.popup-btn")

if (popupBtns) {
    var popupWrapper = document.createElement("div")
    popupWrapper.className = "popup-wrapper"
    document.body.prepend(popupWrapper)

}

popupBtns.forEach(popupBtn => {
    popupBtn.addEventListener("click", evt => {
        let popup = popupBtn.nextElementSibling
        popup.classList.add("show")
        popupWrapper.classList.add("show")

        let popupCloses = document.querySelectorAll(".popup-close")

        let popupClose = evt => {
            popup.classList.remove("show")
            popupWrapper.classList.remove("show")
        }

        popupCloses.forEach(popupclose => {
            popupclose.addEventListener("click", popupClose)
        })
        popupWrapper.addEventListener("click", popupClose)
    })
})