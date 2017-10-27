var api_key = "8ABB0206BE9663B7C477AFACEF49846F";
var url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8ABB0206BE9663B7C477AFACEF49846F&steamids=76561198291618514"
function showUserInfo(url) {
  $.getJSON(url, function(players) {
    $.each(players[0].steamid, function(i, steamid) {
      console.log("Players:", players);
      var steamId = steamid;
      console.log(players);
        document.getElementById("test").innerHTML = steamId;
    });
  });
}
