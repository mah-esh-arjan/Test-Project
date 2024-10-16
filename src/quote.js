import { useState, useEffect } from "react";
import axios from 'axios';

const url = "https://api.quotable.io/random";

const Quote = () => {

    const [quote,setQuote] = useState({});

    const fetchQuote = async () => {
        try{
            const response = await axios.get(url);
            const {content, author} = response.data;
            setQuote({content, author });
        }
        catch(err){
            console.log("error", err);
        }
    }

    useEffect(() => {
        fetchQuote();
    },[])

    const {author, content} = quote;

    const handleFetchQuote = () => {
        fetchQuote();
    }

    return(
    <div>
        <div>
        <h1> {author}</h1>    
        </div>
        <h2>{content}</h2>
        <button onClick={handleFetchQuote}>Get Quoute</button>
    </div>
    )
}

export default Quote;