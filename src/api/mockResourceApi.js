const resources = [
     {
        "Author": "George Canstanza",
        "AverageRating": 2,
        "Category": "ES6",
        "Description": "This is a course that will teach you about ES6",
        "ID": 11,
        "Reviews": [
            {
                "Comment": "This course sucks!",
                "ID": 24,
                "Rating": 0,
                "Username": "Kenny Banya"
            },
            {
                "Comment": "Giddyup!",
                "ID": 25,
                "Rating": 4,
                "Username": "Kramer"
            },
            {
                "Comment": "Even steven",
                "ID": 26,
                "Rating": 2,
                "Username": "Gerry"
            }
        ],
        "Title": "ES and you",
        "URL": "http://www.nbc.com/castanza/es6",
        "Website": "NBC Studios"
    },
    {
        "Author": "Snoopy",
        "AverageRating": 5,
        "Category": "ES6",
        "Description": "Introduction to ES6",
        "ID": 12,
        "Reviews": [
            {
                "Comment": "ek wa eeek",
                "ID": 27,
                "Rating": 5,
                "Username": "Woodstock"
            }
        ],
        "Title": "Beginner",
        "URL": "http://www.peanuts.com",
        "Website": "Peanuts"
    }
];

class ResourceApi {
  static getAllResources() {
    //debugger;
    return new Promise ((resolve) => {
      resolve(Object.assign([], resources));
    });
  }
}

export default ResourceApi;
