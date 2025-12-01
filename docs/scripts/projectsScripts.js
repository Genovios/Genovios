$(document).ready(function () {

    fetch("../projects.json")
        .then(response => response.json())
        .then(data => {

            const container = document.getElementById("projectsContainer");

            data.projects.forEach(project => {

                // Create Bootstrap card
                const card = document.createElement("div");
                card.classList.add("col-md-4", "mb-4");

                card.innerHTML = `
                    <div class="card shadow" style="width: 22rem;">
                      <h4 class="card-title">${project.name}</h4>
                        <img src="${project.img}" class="card-img-top" alt="${project.name} screenshot">
                        
                        <div class="card-body">

                            <a href="${project.app}" class="btn btn-primary mb-2" target="_blank">
                                Go to App
                            </a>
                            
                            <a href="${project.repo}" class="btn btn-secondary" target="_blank">
                                Go to Source Code
                            </a>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading projects.json:", err));

});
