import { useState, useEffect } from "react";
import axios from "axios";
import './pagination.css';

const Pagination = () => {

    const [paginationData, setPaginationData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit,setLimit] = useState(4);

    
        const allUrl = 'https://dummyjson.com/products?';
        const paginatedUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

        const fetchPagination = async (url) => {
            try{
                const response = await axios.get(url)
                const loadData = response.data.products;
                setPaginationData(loadData);

                    // if(isAppending){
                    //     setPaginationData(prevData =>[...loadData, ...prevData]);
                    //     }
                    //     else{
                    //     }
            }
            catch(err){
                console.log("error", err);
            }
        };

        useEffect (
        () => {
       
            fetchPagination(paginatedUrl);
        }
        ,[limit]
    )

    const handlePaginatedClick = () => {
        setLimit(count => count + 4);
        setSkip(count => count + 4);
        // fetchPagination(paginatedUrl, true);
    }

    return(
        <>
        {
            paginationData.map((item) => (
                <div className="card pagination-section" style={{width: '27rem'}} key={item.id}>
               
                <img className="card-img-top" src={item.thumbnail} />
                <div className="card-body "> 
                <h1 class="card-text"> ID: {item.id}</h1>
                <h1 className="card-title" > {item.title}</h1>
     

                </div>
                </div>
            ))
        }
        <button onClick={handlePaginatedClick}> Load More</button>
        </>
    )
}

export default Pagination;