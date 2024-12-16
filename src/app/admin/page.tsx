'use client';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation'
const Admin =()=>{
    const router1 = useRouter(
        
    )
 return(
    <div>
        <div>
            <Button variant="primary">   day la admin</Button>     
                   day la admin
        </div>
        <button onClick={()=>{router1.push('/')}} >back home</button>
    </div>
 )
}


var a = ()=>{
    alert("hello")
}
export default Admin