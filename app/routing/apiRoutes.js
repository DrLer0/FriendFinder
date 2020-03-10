// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        var bestMatchIndex = 0;
        var currentBestMatch = 50;
        for (var i = 0; i < friendsData.length - 1; i++) {
            var totalDifference = 0;
            for (var j = 0; j < 10; j++) {
                totalDifference = totalDifference + Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
            }
            if (totalDifference < currentBestMatch) {
                bestMatchIndex = i;
                currentBestMatch = totalDifference;
            }
        }

        res.json(friendsData[bestMatchIndex]);

    });

};