const data = [
    {
        title : "ARC-Toolkit",
        source : "https://github.com/Liber-Primus/ARC-Toolkit",
        desc : "Multi-Toolkit for Penetration Testing",
        tech : [{stack : "Python"},{stack : "In progress..."}]
    },
    {
        title : "ARC-Vulnerability Scanner",
        source : "https://github.com/Liber-Primus/ARC_Vulnerability_Scanner",
        desc : "Web Application Vulnerability Scanner",
        tech : [{stack : "Python"},{stack : "Streamlit"}]
    },
    {
        title : "Simple Port Scanner",
        source : "https://github.com/Liber-Primus/Simple-Port-Scanner",
        desc : "Simple Network Open Port Scanner",
        tech : [{stack : "Python"}]
    },
];

const projectContainer = document.getElementById('projectContents');
const projects = data.map((project, i) => {
    return`
    <div class="col-lg-6" key=${i}>
    <div class="card shadow">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5>Featured Project</h5>
                <div class="links">
                    <a href=${project.source} target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
            <h3>${project.title}</h3>
            <p class="mt-3">${project.desc}</p>
            ${project.tech.map((stack, i) =>{
                return `
                    <span class="badge rounded-pill">${stack.stack}</span>
                `
            })}
        </div>
    </div>
</div>    
    `;
}).join('');
projectContainer.innerHTML = projects;