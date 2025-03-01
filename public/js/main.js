const outputDiv = document.getElementById("output");
const getPostsBtn = document.getElementById("get-posts");
const addPostForm = document.getElementById("add-post-form");

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

// Add post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Failed to add post");
    }

    showPosts();
  } catch (error) {
    console.log("Error adding post");
  }
}

// Event listeners
getPostsBtn.addEventListener("click", showPosts);
addPostForm.addEventListener("submit", addPost);
