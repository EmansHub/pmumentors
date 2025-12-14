const mentors = [
  { name: "Aisha", skill: "Java" },
  { name: "Omar", skill: "Python" },
  { name: "Sara", skill: "Web" }
];

function searchMentor() {
  const keyword = searchInput.value.toLowerCase();
  mentorResults.innerHTML = "";
  mentors.forEach(m => {
    if (m.skill.toLowerCase().includes(keyword)) {
      mentorResults.innerHTML += `<li>${m.name} - ${m.skill}</li>`;
    }
  });
}
