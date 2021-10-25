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
            "endDate": "",
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

    document.getElementById("school-1").innerHTML = data.education[0].school;
    document.getElementById("period-1").innerHTML = data.education[0].startYear+" - "+data.education[0].endYear;
    document.getElementById("fieldofstudy-1").innerHTML = data.education[0].fieldOfStudy;
    document.getElementById("school-2").innerHTML = data.education[1].school;
    document.getElementById("period-2").innerHTML = data.education[1].startYear+" - "+data.education[0].endYear;
    document.getElementById("fieldofstudy-2").innerHTML = data.education[1].fieldOfStudy;
    document.getElementById("school-3").innerHTML = data.education[2].school;
    document.getElementById("period-3").innerHTML = data.education[2].startYear+" - "+data.education[0].endYear;
    document.getElementById("fieldofstudy-3").innerHTML = data.education[2].fieldOfStudy;

    document.getElementById("etitle-1").innerHTML = data.experience[0].title+" - "+data.experience[0].company;
    document.getElementById("eperiod-1").innerHTML = data.experience[0].startDate+" - "+data.experience[0].endDate;
    document.getElementById("location-1").innerHTML = data.experience[0].location;
    document.getElementById("description-1").innerHTML = data.experience[0].description;
    
    document.getElementById("etitle-2").innerHTML = data.experience[1].title+" - "+data.experience[1].company;
    document.getElementById("eperiod-2").innerHTML = data.experience[1].startDate+" - "+data.experience[1].endDate;
    document.getElementById("location-2").innerHTML = data.experience[1].location;
    document.getElementById("description-2").innerHTML = data.experience[1].description;

    document.getElementById("etitle-3").innerHTML = data.experience[2].title+" - "+data.experience[2].company;
    document.getElementById("eperiod-3").innerHTML = data.experience[2].startDate+" - "+data.experience[2].endDate;
    document.getElementById("location-3").innerHTML = data.experience[2].location;
    document.getElementById("description-3").innerHTML = data.experience[2].description;

    document.getElementById("etitle-4").innerHTML = data.experience[3].title+" - "+data.experience[3].company;
    document.getElementById("eperiod-4").innerHTML = data.experience[3].startDate+" - "+data.experience[3].endDate;
    document.getElementById("location-4").innerHTML = data.experience[3].location;
    document.getElementById("description-4").innerHTML = data.experience[3].description;
})()