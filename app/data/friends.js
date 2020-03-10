// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
        "name": "Ahmed",
        "photo": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "photo": "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "photo": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "photo": "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        "photo": "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "photo": "https://images.pexels.com/photos/310983/pexels-photo-310983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "photo": "https://images.pexels.com/photos/793253/pexels-photo-793253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "photo": "https://static.boredpanda.com/blog/wp-content/uploads/2018/05/depositphotos_6288125-stock-photo-business-analyst__605.jpg",
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
        "photo": "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "name": "Joel",
        "photo": "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
        "photo": "https://lh3.googleusercontent.com/proxy/rdyqbQdsaIfGrGPDQOALMmnLgNYvROQXN05WeqRiHVyyd7XlIeZlBGqvct6gdQctyu9QigCZI7RlSASy4S4pIr_quu8gkQb5vDf0Uh8Yq9ur2jpPCn6uLgfuIceMD7W4kqM9LzfM1q2BHOmBLA",
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