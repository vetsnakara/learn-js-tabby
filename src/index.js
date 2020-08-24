const wrapper = document.querySelector('.tabby')

const tabs = wrapper.querySelectorAll('.tab')
const tabContents = wrapper.querySelectorAll('.tab-content')

const SELECTED_CLASS = 'is-selected'

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // show selected tab
    tabs.forEach(t => t.classList.remove(SELECTED_CLASS))
    tab.classList.add(SELECTED_CLASS)

    // show tab content
    const tabContent = document.querySelector(`#${tab.dataset.target }`)
    tabContents.forEach(c => c.classList.remove(SELECTED_CLASS))
    tabContent.classList.add(SELECTED_CLASS)
  })
})