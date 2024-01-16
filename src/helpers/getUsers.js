// import axios from "axios"

import axios from "axios";

// export const signup = () =>{
//     axios.get('/api/')
// }

export const getSingleUser = (id) => {
  return axios.get(`/api/auth/singleuser/${id}`)
  .then((res)=>{
    return res.data.data
  })
  .catch((err)=>{
    console.log(err)
    throw err
})
};
