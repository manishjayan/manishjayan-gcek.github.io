var data = {
    "firstName": "Manish",
    "lastName": "Jayan",
    "city": "Thrissur",
    "state": "Kerala",
    "phoneNumber": "8281577130",
    "email": "manishjayan@gmail.com",
    "website": "https://manishjayan.in",
    "github": "https://github.com/manishjayan",
    "instagram": "https://www.instagram.com/iammanishjayan",
    "twitter": "https://twitter.com/iammanishjayan",
    "linkedin": "https://linkedin.com/in/manishjayan",
    "education": [
        {
            "school":"Jeevan Jyoti Public School",
            "fieldOfStudy": "High School",
            "startYear": "2002",
            "endYear": "2014"
        },
        {
            "school":"St.Thomas thope",
            "fieldOfStudy": "Higher Secondary education",
            "startYear": "2014",
            "endYear": "2016"
        },
        {
            "school":"Government College Of Engineering Kannur",
            "degree": "Bachelor of Technology - BTech",
            "fieldOfStudy": "Computer Science",
            "startYear": "2016",
            "endYear": "2020"
        }
    ],
    "intership": [
        {
           "Organization": "iBAND Technologies",
           "name": "Android App Development",
           "startDate": "15-06-2018",
           "endDate": "30-06-2018"
        }
    ],
    "experience": [
        {
            "title": "Data Specialist",
            "employementType": "Part-time",
            "company": "Awign",
            "location": "work from home",
            "startDate": "03-2019",
            "endDate": "02-2020",
            "description": ""
        },
        {
            "title": "Exam Proctor",
            "employementType": "Part-time",
            "company": "Awign",
            "location": "work from home",
            "startDate": "08-2020",
            "endDate": "10-2020",
            "description": "Remote assessment proctoring"
        },
        {
            "title": "Subject Matter Expert",
            "employementType": "Part-time",
            "company": "Chegg",
            "location": "Work from home",
            "startDate": "08-2020",
            "endDate": "11-2020",
            "description": "Provide Computer science solutions"
        },
        {
            "title": "Programmer Analyst Trainee",
            "employementType": "Full-time",
            "company": "Cognizant",
            "location": "Coimbatore, Tamil Nadu, India",
            "startDate": "12-2020",
            "endDate": "present",
            "description": ""
        }
    ],
    "technicalCertificates": [
        {
            "name": "Linux Package Management & Kernel Conﬁguration",
            "issuingOrganization": "Government College Of Engineering Kannur",
            "issuedDate": "05-03-2018",
            "verify": ""
        },
        {
            "name": "Machine Learning Workshop",
            "issuingOrganization": "iitmadras",
            "issuedDate": "10-2018",
            "verify": ""
        },
        {
            "name": "Architecting with Google Compute Engine",
            "issuingOrganization": "coursera",
            "issuedDate": "31-03-2020",
            "verify": "https://coursera.org/share/340bae1820ab639aa0ff36e7d02dc5ee"
        }
    ],
    "otherCertificates":[
        {
            "name": "Musical Band",
            "issuingOrganization": "Government College Of Engineering Kannur",
            "issuedDate": "2018",
            "event": "College Arts Festival",
            "placed": "Second",
            "verify": ""
        },
        {
            "name": "Script Writing English",
            "issuingOrganization": "Government College Of Engineering Kannur",
            "issuedDate": "2018",
            "event": "College Arts Festival",
            "placed": "Third",
            "verify": ""
        },
        {
            "name": "Skit English",
            "issuingOrganization": "Government College Of Engineering Kannur",
            "issuedDate": "2018",
            "event": "College Arts Festival",
            "placed": "Third",
            "verify": ""
        }
    ],
    "volunteer": [
        {
            "organization": "Indian Society for Technical Education",
            "Cause": "Science and Technology",
            "startDate": "02-2018",
            "endDate": ""
        }
    ],
    "coordinator": [
        {
            "organization": "Xplore'19",
            "name": "Backtrack coding - Coordinator",
            "cause": "Science and Technology",
            "startDate": "03-2019",
            "endDate": ""
        }
    ],
    "skills": {
        "C": "7/10",
        "C++": "6/10",
        "python": "6/10",
        "HTML": "8/10",
        "JavaScript": "6/10",
        "CSS": "6/10",
        "C#": "7/10",
        "NodeJS": "6/10",
        "SQL": "7/10",
        "DotNet Core": "5/10"
    },
    "projects": [
        {
            "name": "Email spam recognition using python",
            "description": "Used numpy and scikit learn to train dataset",
            "purpose": "College Mini Project"
        },
        {
            "name": "Sangrah Score Sheet Website",
            "description": "Real time scoreboard application for sangrah 18 competion ",
            "purpose": "College Event",
            "link": "https://github.com/manishjayan/sangrahscoresheet"
        },
        {
            "name": "Portfolio webpage for DBMS Lab",
            "description": "Portfolio website for an employee database in node js and mysql",
            "purpose": "College Lab Project",
            "link": "https://github.com/manishjayan/portfoliosql"
        }
    ],
    "Hobbies": [
        "Watching movies",
        "Playing guitar",
        "Travelling"
    ]
};

(function(){
    var fullName = data.firstName+" "+data.lastName;
    document.title = fullName;
    document.getElementById("fullName").innerHTML = fullName;

    document.getElementsByClassName("twitter")[0].href = data.twitter;
    document.getElementsByClassName("instagram")[0].href = data.instagram;
    document.getElementsByClassName("github")[0].href = data.github;
    document.getElementsByClassName("linkedin")[0].href = data.linkedin;

    for(var i = 0; i < 3; i++){
        document.getElementById("education-items").innerHTML +=
         "<div class='resume-item'><h4 id = 'school-"+(i+1)+"'>" + data.education[i].school 
         + "</h4><h5 id = 'period-"+(i+1)+"'>"+data.education[i].startYear+" - "+data.education[i].endYear
         +"</h5><em><p id = 'fieldofstudy-"+(i+1)+"'>"+data.education[i].fieldOfStudy 
         + "</p></em><p></p></div>";
    }

    for(var i = 0; i < 4; i++){
        document.getElementById("professional-items").innerHTML +=
         "<div class='resume-item'>"
         +"<h4 id = 'etitle-"+(i+1)+"'>" + data.experience[i].title
         + "</h4><h5 id = 'eperiod-"+(i+1)+"'>"+data.experience[i].startDate+" - "+data.experience[i].endDate
         +"</h5><em><p id = 'location-"+(i+1)+"'>"+data.experience[i].location
         + "</h5><em><p id = 'description-"+(i+1)+"'>"+data.experience[i].description+ "</p></em></div>";
    }
    var c = 1;
    for(var i = 0,j = 0; i < 3 || j < 3; i++, j++){
        if(i < 3){
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 portfolio-item filter-app'>"
            + "<div class='portfolio-wrap'>"
            +  "<img src='assets/img/portfolio/portfolio-"+c+".jpg' class='img-fluid' alt=''>"
            +  "<div class='portfolio-info'>"
            +    "<h4 id = 'technical-certificate-name-1'>"+data.technicalCertificates[i].name+"</h4>"
            +    "<p id = 'technical-certificate-issuingOrganization-1'>"+data.technicalCertificates[i].issuingOrganization+"</p>"
            +    "<p id = 'technical-certificate-issuedDate-1'>"+data.technicalCertificates[i].issuedDate+"</p>"
            +    "<div class='portfolio-links'>"
            +      "<a href='assets/img/portfolio/portfolio-1.jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='App 1'><i class='bx bx-plus'></i></a>"
            +      "<a href='portfolio-details.html' class='portfolio-details-lightbox' data-glightbox='type: external' title='Portfolio Details'><i class='bx bx-link'></i></a>"
            +    "</div></div></div></div>";
            c++;
        }
        if(j < 3){
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 portfolio-item filter-web'>"
            + "<div class='portfolio-wrap'>"
            +  "<img src='assets/img/portfolio/portfolio-"+c+".jpg' class='img-fluid' alt=''>"
            +  "<div class='portfolio-info'>"
            +    "<h4 id = 'technical-certificate-name-1'>"+data.otherCertificates[j].name+"</h4>"
            +    "<p id = 'technical-certificate-issuingOrganization-1'>"+data.otherCertificates[j].issuingOrganization+"</p>"
            +    "<p id = 'technical-certificate-issuedDate-1'>"+data.otherCertificates[j].issuedDate+"</p>"
            +    "<div class='portfolio-links'>"
            +      "<a href='assets/img/portfolio/portfolio-1.jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='App 1'><i class='bx bx-plus'></i></a>"
            +      "<a href='portfolio-details.html' class='portfolio-details-lightbox' data-glightbox='type: external' title='Portfolio Details'><i class='bx bx-link'></i></a>"
            +    "</div></div></div></div>";
            c++;
        }
    }

})()