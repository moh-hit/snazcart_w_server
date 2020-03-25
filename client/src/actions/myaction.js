import axios from 'axios';
require('../setupProxy')

export const fetchUserAction = ()=>{
   return (dispatch)=>{
    axios.get('/api/current_users', { withCredentials: true })
    .then((res)=>{
       console.log(res)
       dispatch({type:'GET_USER',payload:res.data})
    })

   }
}