export const protfolioService = {
    getProjects,
    setCurrProj,
    getCurrProj
}

const projects = [
    {
        id: "p1",
        name: "Taskolo",
        title: "Project Management Tool",
        desc: "Coding Academy final project  based on Trello. Done with Vue.js, Vuex, MongoDB and web sockets.",
        url: 'https://taskolo-app.herokuapp.com/board/606056b5f2a2af09afd9f2fb',
        publishedAt: 1622454841,
        imgUrl: 'taskolo',
    },
    {
        id: "p2",
        name: "Appsus",
        title: "Notes and Mailbox",
        desc: "Mail and notes app based on Vue.",
        url: 'https://yonatanmiz963.github.io/Appsus/',
        publishedAt: 1619344441,
        imgUrl: 'appsus',
    },
    {
        id: "p3",
        name: "moviex",
        title: "movies information",
        desc: "Collect, share and get details about any movie, based on React, Redux and TMDB api.",
        url: 'https://moviex-app.herokuapp.com/',
        publishedAt: 1622888185,
        imgUrl: 'moviex',
    },
    {
        id: "p4",
        name: "Mister Bitcoin",
        title: "Bitcoin trade",
        desc: "Biitcoin trade app based on React and Redux.",
        url: 'https://dorshaul1.github.io/mister-bitcoin/',
        publishedAt: 1619345785,
        imgUrl: 'bitcoin',
    },
]

let currProj = null

function getProjects() {
    return projects
}

function setCurrProj(id) {
    currProj = projects.find(p => p.id === id)
}

function getCurrProj() {
    return currProj
}