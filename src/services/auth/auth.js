import httpClient from "../../http/axios"

export const login = async (email, password) => {
  try { 

    if (!email || !password) {
        throw new Error("email and password is required")
    } 

    const response = await httpClient.post("/auth/login", {
        email,
        senha: password
    })

    if(response.status != 200) {
        throw new Error("login was failed")
    }
    
    return { token: response.data.token }

  } catch (err) {
    console.error(err)
  }
}

export const register = async (user) => {
    try{
      
        const {
            name,
            email,
            password,
            phone,
            type,
            street,
            neighborhood,
            zipCode, 
            documentNumber
        } = user;     

        if(!name) {
            throw new Error("name is required")
        } 

        if(!email) {
            throw new Error("email is required")
        } 
        if(!password) {
            throw new Error("password is required")
        } 
        if(!phone) {
            throw new Error("phone is required")
        } 
        if(!type) {
            throw new Error("type is required")
        } 
        if(!street) {
            throw new Error("street is required")
        } 
        if(!neighborhood) {
            throw new Error("neighborhood is required")
        } 
        if(!zipCode) {
            throw new Error("zipCode is required")
        } 
        if(!documentNumber) {
            throw new Error("documentNumber is required")
        } 

        await httpClient.post("/auth/register", {
            nome: name,
            email,
            senha: password,
            telefone: phone,
            tipo: type,
            rua: street,
            bairro: neighborhood,
            cep: zipCode,
            cpf: documentNumber
        })

    }catch (err){
        console.error(err)  
    }
}