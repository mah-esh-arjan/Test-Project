import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import axios from "axios";

const ListComponent = () => {

    const [listArr,setListArr] = useState([]);

    useEffect(()=> {

        const fetchCat = async () => {
            try{
            const response = await axios.get("https://catfact.ninja/facts");
                const {data} = response.data;
                setListArr(data);
            }
            catch(err){
                console.log(err)
            }
        };
        fetchCat();
    },[])

    return(
        <>
        <ListItem arr={listArr}/>
        </>
    )
}

export default ListComponent;