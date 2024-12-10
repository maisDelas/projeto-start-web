import { api } from "../../http/axios"

export const login = async (email, password) => {
  try {
    if (!email || !password) {
        throw new Error("email and password is required")
    } 
    
    const response = await api.post("/auth/login", {
        email,
        senha: password
    })

    if(response.status != 200) {
        throw new Error("login was failed")
    }

    return { token: response.data.token }
  } catch (err) {
    throw err;
  }
}

export const register = async (user, type) => {
    try{
        const {
            name,
            email,
            password,
            phone,
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
        
        if(!zipCode) {
            throw new Error("zipCode is required")
        } 
        
        if(!documentNumber) {
            throw new Error("documentNumber is required")
        }
        
        await api.post("/auth/register", {
            nome: name,
            email,
            senha: password,
            telefone: phone,
            tipo: type,
            cep: zipCode,
            cpf: documentNumber
        })
    } catch (err) {
        throw err;
    }
}