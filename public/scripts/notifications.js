const notifyAboutCache = () => {
  let x = document.getElementById('snackbar')
  x.className = 'show'
  setTimeout(() => {
    x.className = x.className.replace('show', '')
  }, 8000)
}
