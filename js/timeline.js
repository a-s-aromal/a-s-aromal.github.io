const data = [
    {
        title : "Chief Executive Officer",
        date : "Feb 2023",
        desc : "Innovation and Entrepreneurship Development Cell - LMCST"
    },
    {
        title : "CISCO - Certification",
        date : "Jul 2022",
        desc : "Introduction to Cybersecurity"
    },
    {
        title : "Penetration Tester - Intern",
        date : "Nov 2021",
        desc : "Cyfosis Cyber Solutions"
    },
    {
        title : "Institution's Innovation Council",
        date : "Nov 2021",
        desc : "Internship Coordinator - LMCST"
    },
    {
        title : "Media Creation Head at Nixiebytes",
        date : "Sep 2021 - Mar 2022",
        desc : "Nixiebytes cybersecurity community under Cyfosis Cyber Solutions"
    },
    {
        title : "IEDC Member",
        date : "Jul 2021",
        desc : "Innovation and Entrepreneurship Development Cell - LMCST"
    },
    {
        title : "Microsoft Technology Associate - Certification",
        date : "Jan 2021",
        desc : "Security Fundamentals Certification"
    },
    {
        title : "B.Tech Computer Science & Engineering",
        date : "2019 - Present",
        desc : "Lourdes Matha College of Science & Technology"
    }
];

const timelineContainer = document.getElementById('timelineContainer');
const timelines = data.map((timeline, i) => {
    return(`
    <div class="row content" key='${i}' >
            <div class="col-lg-1 col-md-2 col-sm-3">
                <div class="verticalLine"></div>
                <div class="badgeEle mt-2 mb-2"></div>
                <div class="verticalLine"></div>
            </div>
            <div class="col-lg-11 col-md-10 col-sm-9">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5>${timeline.title}</h5>
                            <h4>${timeline.date}</h4>
                        </div>
                        <p class="mt-3">${timeline.desc}</p>
                    </div>
                </div>
            </div>
        </div>    
    `)
}).join('');;
timelineContainer.innerHTML = timelines;