import { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerInfoPage = () => {
const [playerInfo, setPlayerInfo] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBPlayerInfo',
    params: {
      playerName: 'abreu'
    },
    headers: {
      'X-RapidAPI-Key': '382ab520ddmshacf0c3e1cbc9f41p15bae3jsnc2ef4fd32fca',
      'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  };
  useEffect (() => {
    const getPlayerInfo = async () => {
      const response = await axios.request(options);
      console.log(response.data.body.height);
      setPlayerInfo(response.data.body.map((player) => {
        console.log(player.height)
      }));
    }
    getPlayerInfo();
  }, []);
  return (

      <p>{playerInfo}</p>

  )
  
  // try {
  //   const response = await axios.request(options);
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
}
export default PlayerInfoPage
