function PlayerController () {
    var game = new PlayerService()

    this.addPlayer = function(e){
        e.preventDefault()
        
        console.log(e.target)
        var form = e.target

        game.addPlayer(form)
        drawPlayers()
        clearForm(form)
    }

    function clearForm(form) {
        form['playerName'].value = ''
        form['playerPosition'].value = ''
        form['playerNumber'].value = ''
    }

    function drawPlayers() {
        var players = game.getAllPlayers()
        var template = ``

        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            template += `
            <div class="player-card">
                <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="">
                <p>Name: ${player.name}</p>
                <p>Position: ${player.position}</p>
                <p>#:${player.number}</p>
            </div>`
        }

        $( "#stuff" ).html(template)
    }
    
}

var pc = new PlayerController

