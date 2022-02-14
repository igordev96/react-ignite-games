//Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//api key
const apiKey = `key=${process.env.REACT_APP_API_KEY}`;

//Base URL
const base_url = "https://api.rawg.io/api/";

//Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New Games
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Game Details
export const gameDetailsURL = (id) => `${base_url}games/${id}?${apiKey}`;

//Game Screenshots
export const gameScreenshotsURL = (id) =>
  `${base_url}games/${id}/screenshots?${apiKey}`;

//Exporting URL's
export const popularGamesURL = () => `${base_url}${popular_games}&${apiKey}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}&${apiKey}`;
export const newGamesURL = () => `${base_url}${new_games}&${apiKey}`;

//Searched Game
export const searchGame = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&${apiKey}`;
