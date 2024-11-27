import { useState } from "react"
import Status from "./StatusProp";

const UserStatus = () => {
    const [isOnline,setIsOnline] = useState([]);
    
    const handleOnline = (id) => {
        if(isOnline.includes(id)){
            setIsOnline( isOnline.filter(item => item !== id ) )
        }
        else{
        setIsOnline([...isOnline,id])
    }
    }

    return (
        <>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Status id ={1} username={"user 1"} handleOnline={handleOnline} isOnline={isOnline}/>
        <Status id= {2} username={"user 2"} handleOnline={handleOnline} isOnline={isOnline}/>
        </div>
        </>
    )
}

export default UserStatus;