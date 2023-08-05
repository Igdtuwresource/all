const profilesData = [
    {
      name: "Sanya",
      college: "ABC University",
      course: "Sew & Style",
      imageUrl: "user.jpg" // Replace with the actual image URL
    },
    {
      name: "Stuti",
      college: "XYZ College",
      course: "Graphic Design",
      imageUrl: "user2.jpg" // Replace with the actual image URL
    },
    {
      name: "Rohan",
      college: "ABC University",
      course: "Guitar Chops 101",
      imageUrl: "user3.png" // Replace with the actual image URL
    },
    // Add more profiles here
  ];
  
  function createProfileElement(profile) {
    const profileElement = document.createElement("div");
    profileElement.classList.add("profile");
    profileElement.innerHTML = `
      <img src="${profile.imageUrl}" alt="Profile Image">
      <div>
        <p>Name: ${profile.name}</p>
        <p>College: ${profile.college}</p>
        <p>Course: ${profile.course}</p>
      </div>
    `;
    profileElement.addEventListener("click", () => {
      localStorage.setItem("selectedProfile", JSON.stringify(profile));
      window.location.href = "profile.html";
    });
    return profileElement;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const profileListElement = document.getElementById("profileList");
    profilesData.forEach(profile => {
      const profileElement = createProfileElement(profile);
      profileListElement.appendChild(profileElement);
    });
  });
  