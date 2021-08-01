let itens = [
  {
    id: 0,
    nome: 'Conjunto outuno Praia',
    descricao: 'Lindo conjunto moda praia de outono',
    img: 'baby-praia.jpg',
    quantidade: 0,
    valorUnitario: 23.50,
    valorTotal: 0
  },
  {
    id: 1,
    nome: 'Urso de pelucia',
    descricao: 'Lindo urso de pelucia',
    img: 'urso-roupa.jpg',
    quantidade: 0,
    valorUnitario: 13.50,
    valorTotal: 0
  },
  {
    id: 0,
    nome: 'Conjunto outuno Praia',
    descricao: 'Lindas blusas de moda primavera',
    img: 'roupas.jpg',
    quantidade: 0,
    valorUnitario: 25.20,
    valorTotal: 0
  },
];

//arrow function
inicializarLoja = () =>{
  let = containerProdutos = document.getElementById('produtos'); 
  itens.map((val)=>{
    containerProdutos.innerHTML += `
      <div class="wrapper-cards">
        <div class="card" style="width: 18rem;">
          <img id="img-prod" class="card-img-top" src="assets/img/`+val.img+`" alt="...">
          <div class="card-body">
            <a key="`+val.id+`" href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div class="descricao">
            <h1 id="titulo"> `+val.img+` </h1>
            <p id="description"> `+val.descricao+` </p>

        </div>
      </div>

    `
  });
}

//arrow function
inicializarCards = () =>{
  let = containerCards = document.getElementById('cards'); 
  itens.map((card)=>{
    containerCards.innerHTML += `
      <a href="produtos.html">
              <img
                onclick="getLink(this)"
                id="img"
                src="assets/img/`+card.img+`"
                class="card-prod-img"
                name="img"
                alt="`+card.nome+`"
              />
      </a> 

    `
  });
}

inicializarCards();
inicializarLoja();

function getLink(a) {

  sessionStorage.setItem("ssImage", a.getAttribute("src"));
  sessionStorage.setItem("ssTitle", a.getAttribute("title"));

  sessionStorage.setItem("ssDescription", a.getAttribute("description"));

  //document.querySelector("[name='img']").style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)100%), url('+ link +')';
}

/** function getImage(a) {
  const image = a.getAttribute('src')
  
  document.querySelector("[name='img']").src;

  // Store
sessionStorage.setItem("ssImage", image);

  alert(sessionStorage.getItem("ssImage"));

  // Redirecionar para outra página:
  location.replace(produtos.html);
}
*/
