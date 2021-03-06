function EventsController($scope) {
    var events = [
        {
            name: "Brewing Agile",
            date: "2018-10-11",
            "time": "until 2018-10-13",
            where: "Auktionsverket Kulturarena",
            type: "Conference",
            link: "https://brewingagile.org/"
        },
        {
            name: "Scrum Beers Göteborg",
            date: "2018-06-12",
            "time": "2018-06-12",
            where: "Haket",
            type: "Meetup",
            link: "https://www.meetup.com/Scrum-beers-Goteborg/"
        },
        {
            name: "Scrum Beers Göteborg",
            date: "2018-07-10",
            "time": "2018-07-10",
            where: "Haket",
            type: "Meetup",
            link: "https://www.meetup.com/Scrum-beers-Goteborg/"
        },
        {
            name: "Scrum Beers Göteborg",
            date: "2018-08-14",
            "time": "2018-08-14",
            where: "Haket",
            type: "Meetup",
            link: "https://www.meetup.com/Scrum-beers-Goteborg/"
        },
        {
            name: "Scrum Beers Göteborg",
            date: "2018-09-11",
            "time": "2018-09-11",
            where: "Haket",
            type: "Meetup",
            link: "https://www.meetup.com/Scrum-beers-Goteborg/"
        },
        {
            name: "Lean Coffee Gothenburg",
            date: "2018-06-22",
            "time": "2018-06-22",
            where: "Café Ritazza",
            type: "Meetup",
            link: "https://www.meetup.com/Lean-Coffee-Gothenburg"
        },
        {
            name: "Lean Coffee Gothenburg",
            date: "2018-07-13",
            "time": "2018-07-13",
            where: "Café Ritazza",
            type: "Meetup",
            link: "https://www.meetup.com/Lean-Coffee-Gothenburg"
        },
        {
            name: "Lean Coffee Gothenburg",
            date: "2018-08-03",
            "time": "2018-08-03",
            where: "Café Ritazza",
            type: "Meetup",
            link: "https://www.meetup.com/Lean-Coffee-Gothenburg"
        },
        {
            name: "Lean Coffee Gothenburg",
            date: "2018-08-24",
            "time": "2018-08-24",
            where: "Café Ritazza",
            type: "Meetup",
            link: "https://www.meetup.com/Lean-Coffee-Gothenburg"
        },
        {
            name: "Scaled Professional Scrum",
            date: "2018-05-15",
            "time": "Tue + Wed",
            where: "Hotel Post, Göteborg",
            type: "Course",
            link: "https://scaled-professional-scrum-ttt.confetti.events/"
        },
        {
            name: "Mob Programming With Woody Zuill",
            date: "2018-03-12",
            "time": "until 2018-03-16",
            where: "Göteborg",
            type: "Course",
            link: "/courses/mobprogramming.html"
        },
        {
            name: "Practical Refactoring With Woody Zuill",
            date: "2018-03-12",
            "time": "until 2018-03-16",
            where: "Göteborg",
            type: "Course",
            link: "/courses/practical-refactoring.html"
        },
        {
            name: "#NoEstimates With Woody Zuill",
            date: "2018-03-12",
            "time": "until 2018-03-16",
            where: "Göteborg",
            type: "Course",
            link: "/2018/woody-week-of-march.html"
        },
        {
            name: "Mob Programming With Woody Zuill",
            date: "2017-09-18",
            "time": "until 2017-09-29",
            where: "Göteborg",
            type: "Course",
            link: "/courses/mobprogramming.html"
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
            link: "https://brewingagile.org/2014/"
        },
        {
            name: "Brewing Agile 2015",
            date: "2015-10-16",
            time: "Fri + Sat",
            where: "Skansen Kronan, Göteborg",
            type: "Conference",
            link: "https://brewingagile.org/2015/"
        },
        {
            name: "Brewing Agile 2016",
            date: "2016-11-04",
            time: "Fri + Sat",
            where: "Skansen Kronan, Göteborg",
            type: "Conference",
            link: "https://brewingagile.org/2016/"
        },
        {
            name: "Brewing Agile 2017",
            date: "2017-11-17",
            time: "Fri + Sat",
            where: "Auktionsverket, Göteborg",
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
