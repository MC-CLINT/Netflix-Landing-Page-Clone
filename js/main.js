// Below is to grab the tab items using their class name
const tabIcons = document.querySelectorAll(".tab--item")
const tabContentItems = document.querySelectorAll(".tab--content--item")

// function
function selectItem(e){
    removeBorder();
    removeShow();
    //adding a border to current tab
    this.classList.add('tab--border')

    // Fetch Content
    const tabContentItem = document.querySelector(`#${this.id}--content`);

    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabIcons.forEach(item =>item.classList.remove('tab--border'))
}


function removeShow() {
    tabContentItems.forEach(item =>item.classList.remove('show'))
}





// listens to the click ... When there's a click on the tab-icon then the tab content shows

tabIcons.forEach(item =>item.addEventListener('click', selectItem))