import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  axios.get(url).then(res => {
    console.log(res);
    setCoins(res.data)
  })

  useEffect(() => {

  }, []);

  const getInputValue = (e) => {
    setSearch(e.target.value)
  }
  const filterCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <h1 className="ApiName">Cryptocurrency API</h1>
      <input type="text" placeholder='Search' onChange={getInputValue} style={{width:"30rem",height:"50px"}} />


      <div className='coins-container'>
        {
          filterCoins.map((coin) => {
            return <Coin image={coin.image} name={coin.name} symbol={coin.symbol}
              current_price={coin.current_price} total_volume={coin.total_volume} />
          })
        }
      </div>
    </div>
  );
}

export default App;
