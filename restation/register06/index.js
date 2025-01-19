function toggleGenderOptions() {
    const options = document.getElementById("gender-options");
    if (options.classList.contains("hidden")) {
      options.classList.remove("hidden");
      options.style.display = "flex";
    } else {
      options.classList.add("hidden");
      options.style.display = "none";
    }
  }
  
  function selectGender(gender) {
    const label = document.getElementById("gender-label");
    label.textContent = `Gender: ${gender}`;
    const options = document.getElementById("gender-options");
    options.classList.add("hidden");
    options.style.display = "none";
  }
  