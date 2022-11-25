const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const btnEntrar = document.querySelector(".btn");

const msgError = document.querySelector("#msgError");
const msgSucces = document.querySelector("#msgSucces");

btnEntrar.addEventListener("click", e => {
  e.preventDefault();
  
  getUser()
});

const getUser = () =>{
    let url = fetch("http://localhost:8080/usuarios")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.filter(item => {
        const {nome, email} = item;

        if(nameInput.value === nome && emailInput.value === email){
            nameInput.value = " ";
            emailInput.value = " ";

            let logado = document.querySelector(".logado");
            alert("Alan")
            console.log(logado);

            // window.location.href = 'http://127.0.0.1:5503/index.html'


        }
        
      });
    });
}