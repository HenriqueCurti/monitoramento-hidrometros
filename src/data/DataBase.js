import API from "./API";

class DataBase {
  // login
  async login(data) {
    await fetch(`${API.url}${API.endpoint.login}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  // usuários
  async getUser() {
    await fetch(`${API.url}${API.endpoint.user}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }

  async setUser(data) {
    await fetch(`${API.url}${API.endpoint.user}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then(this.getUser)
      .catch((err) => console.log(err));
  }

  // blocos
  async getBloco(load) {
    await fetch(`${API.url}${API.endpoint.bloco}`)
      .then((res) => res.json())
      .then((data) => {
        load(data);

        //return data;
      })
      .catch((err) => console.log(err));
  }

  async setBloco(data) {
    await fetch(`${API.url}${API.endpoint.bloco}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then(this.getBloco)
      .catch((err) => console.log(err));
  }

  async updateBloco(data) {
    await fetch(`${API.url}${API.endpoint.bloco}/${data.idBloco}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then(this.getBloco)
      .catch((err) => console.log(err));
  }

  async deleteBloco(data) {
    await fetch(`${API.url}${API.endpoint.bloco}/${data.idBloco}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
    })
      .then(this.getBloco)
      .catch((err) => console.log(err));
  }

  // leituras
  async getLeitura(load) {
    await fetch(`${API.url}${API.endpoint.leitura}`)
      .then((res) => res.json())
      .then((data) => {
        load(data);
      })
      .catch((err) => console.log(err));
  }

  async setLeitura(data) {
    await fetch(`${API.url}${API.endpoint.leitura}${API.endpoint.addLeitura}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res.message))
      .catch((err) => console.log(err));
  }

  async updateLeitura(data) {
    await fetch(`${API.url}${API.endpoint.leitura}/${data.idLeitura}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(data),
    })
      .then(this.getLeitura)
      .catch((err) => console.log(err));
  }

  async deleteLeitura(data) {
    await fetch(`${API.url}${API.endpoint.leitura}/${data.idLeitura}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
    })
      .then(this.getLeitura)
      .catch((err) => console.log(err));
  }

  //hidrometro
  async getHidrometro(load) {
    await fetch(`${API.url}${API.endpoint.hidrometro}`)
      .then((res) => res.json())
      .then((data) => {
        load(data);
      })
      .catch((err) => console.log(err));
  }
}

export default new DataBase();
