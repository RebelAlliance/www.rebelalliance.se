function EventsController($scope) {
    var events = [
        {
            name: "Mob Programming With Woody Zuill",
            date: "2017-09-18",
            "time": "until 2017-09-29",
            where: "Göteborg",
            type: "Course",
            link: "/course-mobprogramming.html"
        },
        {
            name: "Introduktion till agila metoder - Lean, Scrum & Kanban",
            date: "2015-02-13",
            time: "09:00 - 17:00",
            where: "Drakegatan 7, Göteborg",
            type: "Course",
            link: "http://informator.se/boka?ArticleNr=T1420&CourseDateID=14162"
        },
        {
            name: "Kanban - Practical Workshop",
            date: "2015-02-19",
            time: "09:00 - 17:00",
            where: "Drakegatan 7, Göteborg",
            type: "Course",
            link: "http://informator.se/boka?ArticleNr=T1425&CourseDateID=14171#conversion-0"
        },
        {
            name: "Introduktion till agila metoder - Lean, Scrum & Kanban",
            date: "2015-02-02",
            time: "09:00 - 17:00",
            where: "Karlavägen 108, Stockholm",
            type: "Course",
            link: "http://informator.se/boka?ArticleNr=T1420&CourseDateID=14161"
        },
        {
            name: "Scrum Beers Göteborg",
            date: "2015-01-14",
            time: "18.00 - 21:00",
            where: "Haket, Första Långgatan 32",
            type: "Community Event",
            link: "http://scrumbeers.com/"
        },
        {
            name: "Scrum Beers Örebro",
            date: "2015-01-12",
            time: "18.30 - 21:00",
            where: "Harrys, Hamnplan 1",
            type: "Community Event",
            link: "http://www.meetup.com/Scrum-Beers-Orebro/"
        },
        {
            name: "Brewing Agile 2014",
            date: "2014-11-28",
            time: "08.00 - 22.00",
            where: "Skansen Kronan, Göteborg",
            type: "Conference",
            link: "https://brewingagile.org/"
        }
    ];

    $scope.future = function () {
        return _.chain(events)
            .filter(function (e) {
                return Date.parse(e.date).valueOf() >= new Date().valueOf();
            })
            .sortBy(function (e) {
                return e.date;
            })
            .value();
    };

    $scope.past = function () {
        return _.chain(events)
            .filter(function (e) {
                return Date.parse(e.date).valueOf() < new Date().valueOf();
            })
            .sortBy(function (e) {
                return e.date;
            })
            .value().reverse();
    };
}
