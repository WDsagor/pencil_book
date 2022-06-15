import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    console.log(token);
    useEffect(() => {
        const email = user?.user?.email;
        console.log(email);
        const currentUser = {email: email};
        if(email){
            (async()=>{

                const { data } = await axios.put(`https://stark-dusk-04607.herokuapp.com/user/${email}`, currentUser);
                const accessToken = data.accessToken;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })()
            
        }
    }, [user])
    return[token];
}
export default useToken; 