// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Search bar filter
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
  const searchText = searchBar.value.toLowerCase();
  document.querySelectorAll("article").forEach((post) => {
    const title = post.querySelector("h2").textContent.toLowerCase();
    const content = post.querySelector(".post-preview").textContent.toLowerCase();
    post.style.display = title.includes(searchText) || content.includes(searchText)
      ? "block"
      : "none";
  });
});

// Read More / Read Less
document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const article = btn.closest("article");
    const fullText = article.querySelector(".post-full");
    fullText.classList.toggle("hidden");
    btn.textContent = fullText.classList.contains("hidden") ? "Read More" : "Read Less";
  });
});

// Like / Dislike
document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const article = btn.closest("article");
    const likeCount = article.querySelector(".like-count");
    const dislikeBtn = article.querySelector(".dislike-btn");
    const dislikeCount = article.querySelector(".dislike-count");

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
      btn.classList.add("active");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      if (dislikeBtn.classList.contains("active")) {
        dislikeBtn.classList.remove("active");
        dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
      }
    }
  });
});

document.querySelectorAll(".dislike-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const article = btn.closest("article");
    const dislikeCount = article.querySelector(".dislike-count");
    const likeBtn = article.querySelector(".like-btn");
    const likeCount = article.querySelector(".like-count");

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      dislikeCount.textContent = parseInt(dislikeCount.textContent) - 1;
    } else {
      btn.classList.add("active");
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
      if (likeBtn.classList.contains("active")) {
        likeBtn.classList.remove("active");
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
      }
    }
  });
});

// Comments
document.querySelectorAll(".comment-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    const list = btn.nextElementSibling;
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      list.appendChild(li);
      input.value = "";
    }
  });
});

// Newsletter
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  document.getElementById("newsletterMessage").textContent =
    `🎉 Thank you for subscribing, ${email}!`;
  newsletterForm.reset();
});