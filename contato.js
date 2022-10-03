async function executa (){
    const dadosDaMensagem = recebeDadosUsuario ()
    const dados = await enviaDadosParaApi (dadosDaMensagem)
    mostraDadosEnviados (dados)
}

function recebeDadosUsuario () {
    const todosDados = {nome:document.querySelector("#nome").value, email:document.querySelector("#email").value, mensagem:document.querySelector("#mensagem").value}
    
    if (todosDados.nome !== "" && todosDados.email !=="" && todosDados.mensagem !== "") {
        console.log("todos dados foram preenchidos. RETURN DOS DADOS")
        return todosDados
    }  alert ("por favor digite todos dados")
}

async function enviaDadosParaApi (parametro) {
    const url = "https://api-dwi.herokuapp.com/api/examples"
    const response = await fetch (url, {
        method: "POST",
        body: JSON.stringify(parametro),
        headers: {"Content-type": "application/json; charset=UTF-8"} 
    });
    const responseDatas = await response.json()
    return responseDatas
}

function mostraDadosEnviados (parametro){
    const responseDatasUser = JSON.stringify(parametro)
    const divReturnUser = document.querySelector("#divReturnUser")
    divReturnUser.innerHTML = responseDatasUser 
}  


