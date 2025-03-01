const outputDiv = document.getElementById("output");
const getPostsBtn = document.getElementById("get-posts");

// Get and show posts
async function showPosts() {
  try {
    const res = await fetch("/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    outputDiv.innerHTML = "";

    posts.forEach((post) => {
      const divEl = document.createElement("div");
      divEl.textContent = post.title;
      outputDiv.appendChild(divEl);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

// Event listeners
getPostsBtn.addEventListener("click", showPosts);
