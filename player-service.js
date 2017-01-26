var PlayerService = function () {
    var dataStore = this;

    var playersData = [];
    var filteredPlayers = [];

    playersData.forEach(function (player) {
        if (player.team === "SF") { //check to see if they are on the team SF
            filteredPlayers.push(player); //if they are, add them to the array.
        }
    });

    function Player(name, position, number) {
        this.name = name;
        this.position = position;
        this.number = number;
        this.team = "SF";
    }

    this.getPlayersByTeam = function (teamName) {
        playersData.filter((player) => {
            if (player.team == teamName) {
                return true;
            }
        });
    }

    this.getPlayersByPosition = function (position) {
        playersData.filter(function (player) {
            if (player.position == position) {
                return true;
            }
        });
    }

    // function loadPlayersData(){

    //   //Lets check the localstorage for the data before making the call.
    //   //Ideally if a user has already used your site 
    //   //we can cut down on the load time by saving and pulling from localstorage 

    //   var localData = localStorage.getItem('playerData');
    //   if(localData){
    //     playerData = JSON.parse(localData);
    //     return callback(); 
    //     //return will short-circuit the loadPlayersData function
    //     //this will prevent the code below from ever executing
    //   }

    //   var url = "http://bcw-getter.herokuapp.com/?url=";
    //   var apiUrl = url + encodeURIComponent(endpointUri);

    //     $.getJSON(endpointUri, function(data){
    //       playersData = data.body.players;
    //       console.log('Player Data Ready')
    //       console.log('Writing Player Data to localStorage')
    //       localStorage.setItem('playerData', JSON.stringify(playerData))
    //       console.log('Finished Writing Player Data to localStorage')
    //       callback()
    //     });
    // }

    // loadPlayersData();

    dataStore.addPlayer = function (form) {
        var playerName = form['playerName'].value
        var playerPosition = form['playerPosition'].value
        var playerNumber = form['playerNumber'].value

        playersData.push(new Player(playerName, playerPosition, playerNumber))
    }

    dataStore.getAllPlayers = function () {
        return playersData
    }
}