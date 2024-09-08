#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.getElementById('resume-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const dob = document.getElementById('dob').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;
    const skills = document.getElementById('skills').value.split(',');
    // Handle image upload
    const fileInput = document.getElementById('profile-pic');
    const file = fileInput.files?.[0];
    let profilePicURL = '';
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicURL = e.target.result;
            generateResume();
        };
        reader.readAsDataURL(file);
    }
    else {
        generateResume();
    }
    function generateResume() {
        const resumeOutput = `
            <header>
                ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile-pic">` : ''}
                <h1>${name}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Location: ${location}</p>
                <p>Date of Birth: ${dob}</p>
            </header>
            <section id="education">
                <h2>Education</h2>
                <p>${education}</p>
            </section>
            <section id="work-experience">
                <h2>Work Experience</h2>
                <p>${workExperience}</p>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </section>
        `;
        document.getElementById('resume-output').innerHTML = resumeOutput;
        document.getElementById('generated-resume').style.display = 'block';
    }
});
