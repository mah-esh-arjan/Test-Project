import { useState, useEffect } from "react";
import axios from "axios";
import Jsone from "../../Jsone";

const CoinUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

const Coin = () => {
  const [usd, setUSD] = useState({});
  const [gbp, setGBP] = useState({});
  const [eur, setEUR] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const response = await axios.get(CoinUrl);
        console.log("sucess")
        setUSD(response.data.bpi.USD);
        setGBP(response.data.bpi.GBP);
        setEUR(response.data.bpi.EUR);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchCoin();
  }, []);


  const handleCart = (item) => {
    setCart((prevItem) => ({...prevItem, ...item}))
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* <h1>{JSON.stringify(usd)}</h1> */}
      <div class="card" style={{ width: '18rem' }} >
        <div class="card-body">
          <h2 class="card-title">{usd.code}</h2>
          <p class="card-text">
          <h5> {usd.rate}</h5>
          <h5> {usd.description}</h5>        
          <button onClick={() => handleCart(usd)}>Add  </button>
            </p>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }} >
        <div class="card-body">
          <h2 class="card-title">{gbp.code}</h2>
          <p class="card-text">
          <h5> {gbp.rate}</h5>
          <h5> {gbp.description}</h5>
          </p>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }} >
        <div class="card-body">
          <h2 class="card-title">{eur.code}</h2>
          <p class="card-text">
          <h5> {eur.rate}</h5>
          <h5> {eur.description}</h5>
          <button onClick={() => handleCart(eur)}>Add  </button>
          </p>
        </div>
      </div>

        {JSON.stringify(cart)}
    </div>
  );
};

export default Coin;
