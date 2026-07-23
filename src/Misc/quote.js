import { useState, useEffect } from "react";
import axios from 'axios';

const url = "https://api.quotable.io/random";

const Quote = () => {

    const [quote,setQuote] = useState({});
    const [continueQuote,setContinueQuote] = useState(true);

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
    
     let quoteInterval = null;
    
    if(continueQuote){
     quoteInterval = setInterval( () => {fetchQuote() }, 3000);
    }

    return () => {
        clearInterval(quoteInterval);
    };
    },[continueQuote])

    const {author, content} = quote;

    const handleFetchQuote = () => {
        fetchQuote();
    }

    const handleContinueQuote = () => {
        setContinueQuote(continueQuote => !continueQuote)
    }

    return(
    <div>
        <div>
        <h1> {author}</h1>    
        </div>
        <h2>{content}</h2>
        <button onClick={handleFetchQuote}>Get Quoute</button>
        <button onClick={handleContinueQuote}>{continueQuote? 'Stop' : 'Start'}</button>
    </div>
    )
}

export default Quote;