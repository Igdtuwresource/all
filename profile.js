document.addEventListener("DOMContentLoaded", () => {
    const profileDetailsElement = document.getElementById("profileDetails");
    const selectedProfile = JSON.parse(localStorage.getItem("selectedProfile"));
  
    if (selectedProfile) {
      profileDetailsElement.innerHTML = `
        <div class="profile">
          <img src="${selectedProfile.imageUrl}" alt="Profile Image">
          <div>
            <p>Name: ${selectedProfile.name}</p>
            <p>College: ${selectedProfile.college}</p>
            <p>Course: ${selectedProfile.course}</p>
          </div>
        </div>
        <!-- Add additional details here, such as social media icons, projects, etc. -->
      `;
    } else {
      profileDetailsElement.innerHTML = "<p>No profile details found.</p>";
    }
  });
  