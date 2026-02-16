
function showTeam(team) {
  const info = document.getElementById("teamInfo");

  const teamsData = {
    india: {
      name: "India National Cricket Team",
      captain: "Rohit Sharma",
      worldCups: "2 (1983, 2011)",
      format: "Test, ODI, T20"
    },
    mi: {
      name: "Mumbai Indians",
      captain: "Hardik Pandya",
      titles: "5 IPL Titles",
      home: "Wankhede Stadium"
    },
    csk: {
      name: "Chennai Super Kings",
      captain: "MS Dhoni",
      titles: "5 IPL Titles",
      home: "M. A. Chidambaram Stadium"
    },
    rcb: {
      name: "Royal Challengers Bangalore",
      captain: "Rajat Patidhar",
      titles: "1 IPL Titles",
      home: "M. Chinnaswamy Stadium"
    }
  };

  const teamData = teamsData[team];

  info.innerHTML = `
    <h2>${teamData.name}</h2>
    <p><strong>Captain:</strong> ${teamData.captain}</p>
    <p><strong>Titles:</strong> ${teamData.titles || teamData.worldCups}</p>
    <p><strong>Home Ground:</strong> ${teamData.home || teamData.format}</p>
  `;
}
