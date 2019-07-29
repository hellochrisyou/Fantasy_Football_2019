export const enum ApiUrls {
  findAccount = 'http://localhost:8080/api/account/findAccount/',
  getAllLeagues = 'http://localhost:8080/api/league/getAllLeagues/',
  createLeague = 'http://localhost:8080/api/league/createLeague/',
  createTeam = 'http://localhost:8080/api/team/createTeam/',
  addPlayer = 'http://localhost:8080/api/team/addPlayer/',
  addWaiver = 'http://localhost:8080/api/team/addWaiver/',
  togglePlayer = 'http://localhost:8080/api/team/togglePlayer/',
  tradeTeam = 'http://localhost:8080/api/team/tradeTeam/',
  lastWeek = 'https://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&week=1&season=2018&position=',
  lastSeason = 'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&position='
}
