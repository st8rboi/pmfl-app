export const createMatch = (team_home, team_away, data, url) => {
    const newMatch =   {
    team_home: team_home,
    team_away: team_away,
    goals_home: "",
    goals_away: "",
    data: data,
    lastnow: true,
    url: url,
    visible: "1"
  }

fetch('https://65ba3f9fb4d53c0665526458.mockapi.io/matches', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(newMatch)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // do something with the new task
}).catch(error => {
  // handle error
})
    alert('Матч создан')
}