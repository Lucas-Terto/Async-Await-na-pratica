// Sintaxe

//OBS.: await funciona apenas em funções assíncronas

//Nota: Async e Await são opções mais eficientes para substituir as promises.

/*
function firstFunction() {
    return new Promise((resolve) => {
    
        setTimeout(() => {
            console.log("Conteúdo aguardado!")
            resolve()
        }, 1000)
    
    })
}


async function secondFunction() {//função assíncrona

    console.log("Início")

    await firstFunction()// Espera a função executar antes de dar continuidade ao restante do código

    console.log("Final")

}

secondFunction()
*/

// Na prática

function getUser(id) {
    //Obtendo usuários por meio de uma api com fetch
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then((data) => data.json())//recebendo um data e convertendo para json
        .catch((error) => {console.log(error)})//configurando mensagem de erro

}

async function showUserName(id) {

    try {
        const user = await getUser(id)//aguardando a função ser completada
        console.log(`O nome do usuário é: ${user.data.first_name}`)
        
    } catch (error) {//Tratamento de erros na async function
        console.log(`Erro: ${error}`)
    }



}

showUserName(1)
