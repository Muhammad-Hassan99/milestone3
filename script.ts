document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const imageInput = document.getElementById("profileImage") as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById("contact") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
  
  
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const education = educationElement.value;
    const skills=skillsElement.value
    // const image = imageElement.files && imageElement.files.length > 0 ? imageElement.files[0].name : 'No image uploaded';
const profileImageFIle=imageInput.files?.[0];
const profileImageURL=profileImageFIle?URL.createObjectURL(profileImageFIle):"";

    // Correctly use the extracted values in the template string
    const resOutput = `
    ${profileImageURL ? `<img src=${profileImageURL} alt="profile picture" class="profileImage">` : ''}

        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <h2>Education</h2>
        <p><strong>Education:</strong> ${education}</p>
          <p><strong>Education:</strong> ${skills}</p>
       
    `

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resOutput;
    } else {
        console.error("The resume output element is missing");
    }
})