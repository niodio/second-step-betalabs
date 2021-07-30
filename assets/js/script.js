function getImage(a) {
  const image = a.getAttribute('src')
  
  document.querySelector("[name='img']").src;

  // Store
sessionStorage.setItem("ssImage", image);

  alert(sessionStorage.getItem("ssImage"));

  // Redirecionar para outra página:
  location.replace(produtos.html);
}


