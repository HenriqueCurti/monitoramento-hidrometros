import API from "./API";

class DataBase {  
   // login 
   async login(data) {
        await fetch(`${API.url}${API.endpoint.login}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(res => {
            return res;
        }).catch(err => console.log(err))             
    }

    // usuários
    async getUser(){
        await fetch(`${API.url}${API.endpoint.user.getUser}`)
              .then(res => res.json())
              .then(data => {return data})
              .catch(err => console.log(err))
    }

    async setUser(data){
        await fetch(`${API.url}${API.endpoint.user.setUser}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(this.getUser)
        .catch(err => console.log(err))         
    }

    // blocos
    async getBloco(){
        await fetch(`${API.url}${API.endpoint.bloco.getBloco}`)
              .then(res => res.json())
              .then(data => {return data})
              .catch(err => console.log(err))
    }

    async setBloco(data){
        await fetch(`${API.url}${API.endpoint.bloco.setBloco}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(this.getBloco)
        .catch(err => console.log(err))         
    }

    async updateBloco(data){
        await fetch(`${API.url}${API.endpoint.bloco.updateBloco}/${data.idBloco}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'PUT',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(this.getBloco)
        .catch(err => console.log(err))         
    }

    async deleteBloco(data){
        await fetch(`${API.url}${API.endpoint.bloco.deleteBloco}/${data.idBloco}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'DELETE',
            mode  : 'cors',
            cache : 'no-cache',
        }).then(this.getBloco)
        .catch(err => console.log(err))         
    }

    // leituras
    async getLeitura(){
        await fetch(`${API.url}${API.endpoint.leitura.getLeitura}`)
              .then(res => res.json())
              .then(data => {return data})
              .catch(err => console.log(err))
    }

    async setLeitura(data){
        await fetch(`${API.url}${API.endpoint.leitura.setLeitura}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'POST',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(this.getLeitura)
        .catch(err => console.log(err))         
    }

    async updateLeitura(data){
        await fetch(`${API.url}${API.endpoint.leitura.updateLeitura}/${data.idLeitura}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'PUT',
            mode  : 'cors',
            cache : 'no-cache',
            body  : JSON.stringify(data)
        }).then(this.getLeitura)
        .catch(err => console.log(err))         
    }

    async deleteLeitura(data){
        await fetch(`${API.url}${API.endpoint.leitura.deleteLeitura}/${data.idLeitura}`, {
            headers:{
                "Content-Type": "application/json"
            },
            method: 'DELETE',
            mode  : 'cors',
            cache : 'no-cache',
        }).then(this.getLeitura)
        .catch(err => console.log(err))         
    }
}

export default new DataBase;