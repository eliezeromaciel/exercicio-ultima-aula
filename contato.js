// APARENTEMENTE TD TINHA DADO CERTO, CONFORME SUGESTÕES DO PROF. PORÉM, NA ULTIMA FUNÇÃO, A QUAL MOSTRA NUMA DIV AS INFORMAÇÕES
// QUE FORAM ENVIADAS PARA A API, ESTÁ APARECENDO UM OBJETO VAZIO !!!!!!!!!!!!!!!!!!!!!!


async function executa (){
    const camposMsg = [
        {id: "#nome" , valor: document.querySelector("#nome").value},
        {id: "#email", valor: document.querySelector("#email").value},
        {id:"#mensagem", valor: document.querySelector("#mensagem").value} ]
    
    const estaValido = analisaDados(camposMsg)  
    if (estaValido == true){
        const responseDatas = await enviaDadosParaApi (camposMsg)
        const responseToUser = mostraDadosEnviados (responseDatas)

    }
}


function analisaDados (camposMsg) {
    let ehValido = true
    const divMsgUser = document.querySelector("#divMsgUser")
        
    camposMsg.forEach( (parametro) => {
        
            if (parametro.valor =="") {
            document.querySelector(parametro.id).style.border = "dashed red 2px"
            console.log (`O campo ${parametro.id} está vazio`)        
            
            divMsgUser.innerHTML = `Há campos faltantes`        
            divMsgUser.style.color = "red"
            divMsgUser.style.border = "solid red 3px"

            ehValido = false
            
        } else {

            document.querySelector(parametro.id).style.border = "solid white 1px"
            divMsgUser.innerHTML = "Campos Ok"
            divMsgUser.style.color = "green"
            divMsgUser.style.border = "solid green 3px"
            
        }
    });
    return ehValido       
}


async function enviaDadosParaApi (parametro) {
    const url = "https://api-dwi.herokuapp.com/api/examples"
    const response = await fetch (url, {
        method: "POST",
        body: JSON.stringify(parametro),
        headers: {"Content-type": "application/json; charset=UTF-8"} 
    });
    const responseDatas = await response.json()
    console.log('este é o retorno da função enviaDadosParaApi: ', responseDatas)
    return responseDatas
}

function mostraDadosEnviados (parametro){
    
    const responseDatasUser = JSON.stringify(parametro)
    const divReturnUser = document.querySelector("#divReturnUser")
    divReturnUser.innerHTML = responseDatasUser 
}  


