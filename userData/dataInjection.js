(function () {

    // full Name 
    let fullName = data.firstName + " " + data.lastName;
    document.title = fullName;
    let fullNameClass = document.querySelectorAll('.fullName');
    fullNameClass.forEach(function (c) {
        c.innerHTML = fullName;
    });

    // Social links 
    let genericClass = document.querySelectorAll('.twitter');
    genericClass.forEach(function (c) {
        c.href = data.twitter;
    });
    genericClass = document.querySelectorAll('.instagram');
    genericClass.forEach(function (c) {
        c.href = data.instagram;
    });
    genericClass = document.querySelectorAll('.github');
    genericClass.forEach(function (c) {
        c.href = data.github;
    });
    genericClass = document.querySelectorAll('.linkedin');
    genericClass.forEach(function (c) {
        c.href = data.linkedin;
    });

    // My Journey
    for (var i = 0; i < 3; i++) {
        document.getElementById("education-items").innerHTML +=
            "<div class='resume-item'><h4 id = 'school-" + (i + 1) + "'>" + data.education[i].school
            + "</h4><h5 id = 'period-" + (i + 1) + "'>" + data.education[i].startYear + " - " + data.education[i].endYear
            + "</h5><em><p id = 'fieldofstudy-" + (i + 1) + "'>" + data.education[i].fieldOfStudy
            + "</p></em><p></p></div>";
    }

    for (var i = 0; i < 4; i++) {
        document.getElementById("professional-items").innerHTML +=
            "<div class='resume-item'>"
            + "<h4 id = 'etitle-" + (i + 1) + "'>" + data.experience[i].title
            + "</h4><h5 id = 'eperiod-" + (i + 1) + "'>" + data.experience[i].startDate + " - " + data.experience[i].endDate
            + "</h5><em><p id = 'location-" + (i + 1) + "'>" + data.experience[i].location
            + "</h5><em><p id = 'description-" + (i + 1) + "'>" + data.experience[i].description + "</p></em></div>";
    }

    // Certificates
    var c = 1;
    for (var i = 0, j = 0; i < 3 || j < 3; i++, j++) {
        if (i < 3) {
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 portfolio-item filter-app'>"
                + "<div class='portfolio-wrap'>"
                + "<img src='assets/img/portfolio/portfolio-" + c + ".jpg' class='img-fluid' alt=''>"
                + "<div class='portfolio-info'>"
                + "<h4 id = 'technical-certificate-name-1'>" + data.technicalCertificates[i].name + "</h4>"
                + "<p id = 'technical-certificate-issuingOrganization-1'>" + data.technicalCertificates[i].issuingOrganization + "</p>"
                + "<p id = 'technical-certificate-issuedDate-1'>" + data.technicalCertificates[i].issuedDate + "</p>"
                + "<div class='portfolio-links'>"
                + "<a href='assets/img/portfolio/portfolio-"+c+".jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='App 1'><i class='bx bx-plus'></i></a>"
                + "<a target = '_blank' href='"+data.technicalCertificates[i].verify+"' class='portfolio-details-lightbox' data-glightbox='type: internal' title = 'verify''><i class='bx bx-link'></i></a>"
                + "</div></div></div></div>";
            c++;
        }
        if (j < 3) {
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 portfolio-item filter-web'>"
                + "<div class='portfolio-wrap'>"
                + "<img src='assets/img/portfolio/portfolio-" + c + ".jpg' class='img-fluid' alt=''>"
                + "<div class='portfolio-info'>"
                + "<h4 id = 'technical-certificate-name-1'>" + data.otherCertificates[j].name + "</h4>"
                + "<p id = 'technical-certificate-issuingOrganization-1'>" + data.otherCertificates[j].issuingOrganization + "</p>"
                + "<p id = 'technical-certificate-issuedDate-1'>" + data.otherCertificates[j].issuedDate + "</p>"
                + "<div class='portfolio-links'>"
                + "<a href='assets/img/portfolio/portfolio-"+c+".jpg' data-gallery='portfolioGallery' class='portfolio-lightbox' title='App 1'><i class='bx bx-plus'></i></a>"
                + "<a target = '_blank' href='"+data.otherCertificates[i].verify+"' class='portfolio-details-lightbox' data-glightbox='type: external' title='Portfolio Details'><i class='bx bx-link'></i></a>"
                + "</div></div></div></div>";
            c++;
        }
    }

    // Project
    for (var i = 0; i < 3; i++) {
        document.getElementById("project-items").innerHTML += "<div class='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='zoom-in' data-aos-delay='200'>"
            + "<div class='icon-box iconbox-orange '>"
            + "<h4><a href='" + data.projects[i].link + "'target='_blank'>" + data.projects[i].name + " - " + data.projects[i].purpose + "</a></h4><p>"
            + data.projects[i].description
            + "</p></div></div>";
    }

    // contact form
    document.getElementById("location").innerHTML = data.city + ", " + data.state;
    document.getElementById("myemail").innerHTML = data.email;
    document.getElementById("phone").innerHTML = data.phoneNumber;
    
})()