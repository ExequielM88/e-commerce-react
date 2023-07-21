import  axios  from "axios"


const useAuthentication = () => {
  
  
  
  const createANewUser = data => {
    
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users"
    
    axios
      .post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }
  
  
  const LoginUser = data => {
    
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login"

    axios.post(url, data)
      .then(res => {
        localStorage.setItem("token", res.data.token)}
      )
      .catch(err => console.log(err))
  }
  

  return {createANewUser, LoginUser}
}

export default useAuthentication