const wrapper = document.querySelector('.tabby')

const tabs = wrapper.querySelectorAll('.tab')
const tabsContainer = wrapper.querySelector('.tabs')
const tabContents = wrapper.querySelectorAll('.tab-content')

const SELECTED_CLASS = 'is-selected'

tabsContainer.addEventListener('click', e => {
  const tab = event.target
  const target = tab.dataset.target
  const tabContent = wrapper.querySelector(`#${target}`)

  // select tab
  tabs.forEach(tab => tab.classList.remove(SELECTED_CLASS))
  tab.classList.add(SELECTED_CLASS)

  // select corresponding tab content
  tabContents.forEach(content => content.classList.remove(SELECTED_CLASS))
  tabContent.classList.add(SELECTED_CLASS)
})