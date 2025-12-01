function btnClicky () {
  console.log('in btnClicky event');
  //document.getElementById('btnClicky').style.transform='rotate(15deg)';
  document.getElementById('btnClicky').classList.add('buttonColor');
  console.log('out of btnClicky event');
    //.querySelectorAll('.yourClassName')
    //.forEach(el => { el.style.transform = 'rotate(15deg)'; });
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Starting up!");

    document.getElementById('btnClicky').addEventListener('click', btnClicky);
    //alert("Hey!")
  });


$(document).ready(function () {

    function loadSkills() {
        const container = document.getElementById("container");
        container.innerHTML = ""; 

        // Load initial skills from skills.json
        fetch("skills.json")
            .then(res => res.json())
            .then(jsonData => {
                const defaultSkills = jsonData.skills;

                // Load user-added skills from localStorage
                const storedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];

                // Combine both sources
                const allSkills = [...defaultSkills, ...storedSkills];

                // Display skills
                allSkills.forEach(skill => {
                    const div = document.createElement("div");
                    div.classList.add("item-block");
                    div.innerHTML = `
                        <h3>${skill.title}</h3>
                        <p>Years Experience: ${skill.years}</p>
                    `;
                    container.appendChild(div);
                });
            });
    }


    // Load skills at startup
    loadSkills();


    // Handle new skill form submit
    document.getElementById("skillForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("skillTitle").value;
        const years = document.getElementById("skillYears").value;

        const newSkill = { title, years };

        // Save to localStorage
        const stored = JSON.parse(localStorage.getItem("userSkills")) || [];
        stored.push(newSkill);
        localStorage.setItem("userSkills", JSON.stringify(stored));

        // Reload displayed skills
        loadSkills();

        // Clear form fields
        this.reset();
    });

});
