const axios = require('axios');

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

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}