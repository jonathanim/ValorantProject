

const agents = [
    {

        name: "Astra",
        img: "./images/Astra_artwork.png",
        role: "Controller",
        gender: "Female"

    },

    {

        name: "Breach",
        img: "./images/Breach_artwork.png",
        role: "Initiator",
        gender: "Male"

    },

    {

        name: "Brimstone",
        img: "./images/Brimstone_artwork.png",
        role: "Controller",
        gender: "Male"

    },
    {

        name: "Cypher",
        img: "./images/Cypher_artwork.png",
        role: "Sentinel",
        gender: "Male"

    },
    {

        name: "Jett",
        img: "./images/Jett_artwork.png",
        role: "Duelist",
        gender: "Female"

    },
    {

        name: "Killjoy",
        img: "./images/Killjoy.png",
        role: "Sentinel",
        gender: "Female"

    },
    {

        name: "Omen",
        img: "./images/Omen_artwork.png",
        role: "Controller",
        gender: "Male"

    },
    {

        name: "Phoenix",
        img: "./images/Phoenix_artwork.png",
        role: "Duelist",
        gender: "Male"

    },
    {

        name: "Raze",
        img: "./images/Raze_artwork.png",
        role: "Duelist",
        gender: "Female"

    },
    {

        name: "Reyna",
        img: "./images/Reyna_artwork.png",
        role: "Duelist",
        gender: "Female"

    },
    {

        name: "Sage",
        img: "./images/Sage_artwork.png",
        role: "Sentinel",
        gender: "Female"

    },
    {

        name: "Skye",
        img: "./images/Skye_Keyart_final.png",
        role: "Initiator",
        gender: "Female"

    },
    {

        name: "Sova",
        img: "./images/Sova_artwork.png",
        role: "Initiator",
        gender: "Male"

    },
    {

        name: "Viper",
        img: "./images/Viper_artwork.png",
        role: "Controller",
        gender: "Female"

    },
    {

        name: "Yoru",
        img: "./images/Yoru2.png",
        role: "Duelist",
        gender: "Male"

    }
]


const sectionAgents = document.getElementById("characters");
const sectionButtons = document.querySelector(".btn-group")


window.addEventListener("DOMContentLoaded", function () {
    createAgent(agents);

    createBtn(agents);

})


function createBtn(agentArr) {
    const rolesBtn = agentArr.reduce(function (acc, item) {
        if (!acc.includes(item.role)) {
            acc.push(item.role)
        }
        return acc;
    }, ['all']);

    const displayButton = rolesBtn.map(function (btn) {
        return `<button class="btn myBtn" type="button" data-role="${btn}">
        ${btn}
    </button>`
    }).join("");
    sectionButtons.innerHTML = displayButton;

    const filterBtn = document.querySelectorAll(".myBtn");

    filterBtn.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            let currentRole = e.currentTarget.dataset.role;
            let agentRoles = agents.filter(function (role) {
                if (role.role === currentRole) {
                    return role
                }
            })

            if (currentRole === "all") {
                createAgent(agents)
            }
            else (createAgent(agentRoles))
        })
    })

}




function createAgent(agentsArray) {


    let displayAgent = agentsArray.map(function (agent) {
        return `<div class="character col d-flex flex-wrap col-sm-6 col-md-4 text-center">
        <div class="card">
            <img src="${agent.img}" class="card-img-top img-fluid img-thumbnail" alt="${agent.name}">
            <div class="card-body">
                <h5 class="card-title">${agent.name}</h5>
                <p class="card-text">
                ${agent.gender}
                </p>
                <p class="card-text">
                ${agent.role}
                </p>
            </div>
        </div>
    </div>
        `
    }).join("");
    sectionAgents.innerHTML = displayAgent
}



