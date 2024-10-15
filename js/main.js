// Below is to grab the tab items using their class name
const tabIcons = document.querySelectorAll(".tab--item")
const tabContentItem = document.querySelectorAll(".tab--content--item")

// function
function selectItem(e){
    //adding a border to current tab
    this.classList.add('tab--border')
}

// listens to the click ... When there's a click on the tab-icon then the tab content shows

tabIcons.forEach(item =>item.addEventListener('click', selectItem))