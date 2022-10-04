function executa (){
    analisaDados()  
}


function analisaDados () {
    const divMsgUser = document.querySelector("#divMsgUser")
    const camposMsg = [
        {id: "#nome" , valor: document.querySelector("#nome").value},
        {id: "#email", valor: document.querySelector("#email").value},
        {id:"#mensagem", valor: document.querySelector("#mensagem").value} ]
    
    let teste = ""    
    camposMsg.forEach( (parametro) => {
        
            if (parametro.valor =="") {
            document.querySelector(parametro.id).style.border = "dashed red 2px"
            console.log (`O campo ${parametro.id} está vazio`)        
            
            divMsgUser.innerHTML = `Há campos faltantes`        
            divMsgUser.style.color = "red"
            divMsgUser.style.border = "solid red 3px"
            
        } else {
            document.querySelector(parametro.id).style.border = "solid white 1px"
            divMsgUser.innerHTML = "Campos Ok"
            divMsgUser.style.color = "green"
            divMsgUser.style.border = "solid green 3px"    
            teste += parametro
            
        }
    });
    console.log(teste[2].toString())
    return teste        // QUERO QUE AQUI RETORNE 
}























function recebeDadosUsuario () {
    const todosDados = {nome:document.querySelector("#nome").value, email:document.querySelector("#email").value, mensagem:document.querySelector("#mensagem").value}
    
    if (todosDados.nome !== "" && todosDados.email !=="" && todosDados.mensagem !== "") {
        console.log("todos dados foram preenchidos. RETURN DOS DADOS")
        return todosDados
    }   
        alert ("por favor digite todos dados")
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


