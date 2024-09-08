var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var imageInput = document.getElementById("profileImage");
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById("email");
    var contactElement = document.getElementById("contact");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var name = nameElement.value;
    var email = emailElement.value;
    var contact = contactElement.value;
    var education = educationElement.value;
    var skills = skillsElement.value;
    // const image = imageElement.files && imageElement.files.length > 0 ? imageElement.files[0].name : 'No image uploaded';
    var profileImageFIle = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profileImageURL = profileImageFIle ? URL.createObjectURL(profileImageFIle) : "";
    // Correctly use the extracted values in the template string
    var resOutput = "\n    ".concat(profileImageURL ? "<img src=\"".concat(profileImageURL, " alt=\"profile picture\" class=\"profileImage\">") : '', " \n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <h2>Education</h2>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n          <p><strong>Education:</strong> ").concat(skills, "</p>\n       \n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
});
