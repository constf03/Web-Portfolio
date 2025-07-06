const handleMobileNav = () => {
  var x = document.getElementById('dropDownLinks')
  if (x.style.display === 'flex') {
    x.style.display = 'none'
  } else {
    x.style.display = 'flex'
  }
}
