import { useState } from "react"
import Status from "./StatusProp";

const UserStatus = () => {

    
    return (
        <>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Status username={"user1"} />
        <Status username={"user2"} />
        </div>
        </>
    )
}

export default UserStatus;