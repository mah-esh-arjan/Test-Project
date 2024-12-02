import { useState, useEffect } from "react";
import axios from "axios";

const CoinUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'

const Coin = () => {

    const [usd,setUSD] = useState();
    const [gbp,setGBP] = useState();
    const [eur,setEUR] = useState();

    useEffect(
        () => {
        const fetchCoin = async () => {
            try{
            const response = await axios.get(CoinUrl);
            setUSD(response.data.bpi.USD);
            setGBP(response.data.bpi.GBP);
            setEUR(response.data.bpi.EUR);
            }
            catch(err){
                console.log("error", err);
            }

        }
        fetchCoin()
        }, []
    )
    
    return(
        <>
        <h1> {usd.rate}</h1>
        <h1> {usd.description}</h1>
        <h1> {usd.code}</h1>
        </>
    )
}

export default Coin;