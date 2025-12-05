function btnClicky() {
    document.getElementById('btnClicky').classList.add('buttonColor');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('btnClicky').addEventListener('click', btnClicky);
});

$(document).ready(function () {

    function loadSkills() {
        const container = document.getElementById("skillsContainer");
        container.innerHTML = "";

        fetch("skills.json")
            .then(res => res.json())
            .then(jsonData => {
                const defaultSkills = jsonData.skills;
                const storedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];
                const allSkills = [...defaultSkills, ...storedSkills];

                allSkills.forEach(skill => {
                    const div = document.createElement("div");
                    div.classList.add("skill-block");
                    div.innerHTML = `
                        <strong>${skill.title}</strong><br>
                        <small>Years Experience: ${skill.years}</small>
                    `;
                    container.appendChild(div);
                });
            });
    }

    loadSkills();

    document.getElementById("skillForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("skillTitle").value;
        const years = document.getElementById("skillYears").value;

        const newSkill = { title, years };

        const stored = JSON.parse(localStorage.getItem("userSkills")) || [];
        stored.push(newSkill);
        localStorage.setItem("userSkills", JSON.stringify(stored));

        loadSkills();
        this.reset();
    });

});


