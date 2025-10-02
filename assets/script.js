
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("count").textContent = count;
});
function openModal() {
  document.getElementById("profileModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("profileModal").style.display = "none";
}
function selectAvatar(img) {
  document.querySelectorAll(".avatar-grid img").forEach(i => i.classList.remove("selected"));
  img.classList.add("selected");
}
function submitProfile() {
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const avatar = document.querySelector(".avatar-grid img.selected");
  if (!avatar) {
    alert("Please select an avatar.");
    return;
  }
  localStorage.setItem("zestProfile", JSON.stringify({
    category, description, avatar: avatar.src
  }));
  alert("Profile saved!");
  closeModal();
}
