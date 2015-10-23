export default function sanitizeInput(e) {

  e.preventDefault()

  let clipboardContent = e.clipboardData.getData('text/plain')
  let tempEl = document.createElement('div')

  tempEl.innerHTML = clipboardContent
  document.execCommand('insertHTML', false, tempEl.textContent)
}


