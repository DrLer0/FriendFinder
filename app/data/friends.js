// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Bob",
        "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fartist%2Fbob-ross&psig=AOvVaw2u5zSrFdDkpxDEQlprOuq7&ust=1583602381727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNji5eOwhugCFQAAAAAdAAAAABAD",
        "scores": [
            "5",
            "3",
            "2",
            "1",
            "2",
            "1",
            "3",
            "3",
            "5",
            "2"
        ]
    },
    {
        "name": "Bob",
        "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fartist%2Fbob-ross&psig=AOvVaw2u5zSrFdDkpxDEQlprOuq7&ust=1583602381727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNji5eOwhugCFQAAAAAdAAAAABAD",
        "scores": [
            "5",
            "3",
            "2",
            "1",
            "2",
            "1",
            "3",
            "3",
            "5",
            "2"
        ]
    },
    {
        "name": "Bob",
        "photo": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fartist%2Fbob-ross&psig=AOvVaw2u5zSrFdDkpxDEQlprOuq7&ust=1583602381727000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNji5eOwhugCFQAAAAAdAAAAABAD",
        "scores": [
            "5",
            "3",
            "2",
            "1",
            "2",
            "1",
            "3",
            "3",
            "5",
            "2"
        ]
    },
    {
        "name": "Jenna Purdy",
        "photo": "www.google.com",
        "scores": [
            "3",
            "4",
            "4",
            "4",
            "4",
            "1",
            "3",
            "4",
            "3",
            "1"
        ]
    },
    {
        "name": "GiphyAPI",
        "photo": "fffefe",
        "scores": [
            "3",
            "5",
            "2",
            "4",
            "4",
            "3",
            "5",
            "2",
            "5",
            "3"
        ]
    },
    {
        "name": "Joel",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/292px-Arsenal_FC.svg.png",
        "scores": [
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "4",
            "1"
        ]
    },
    {
        "name": "Jonathan",
        "photo": "(0.0)",
        "scores": [
            "5",
            "3",
            "4",
            "4",
            "3",
            "2",
            "4",
            "4",
            "3",
            "3"
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;