const generateBtn = document.getElementById("generate-description");

if (generateBtn) {
  generateBtn.addEventListener("click", async () => {

    const title = document.querySelector(
      'input[name="listing[title]"]'
    ).value;

    const location = document.querySelector(
      'input[name="listing[location]"]'
    ).value;

    const category = document.getElementById("category").value;

    const description = document.getElementById("description");

    if (!title || !location || !category) {
      alert("Please enter title, location and category first.");
      return;
    }

    try {
      generateBtn.disabled = true;
      generateBtn.innerText = "Generating...";

      const response = await fetch("/listings/ai/generate-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          location,
          category
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate description");
      }

      description.value = data.description;

    } catch (error) {
      console.error(error);
      alert("Unable to generate description. Please try again.");

    } finally {
      generateBtn.disabled = false;
      generateBtn.innerText = "✨ Generate with AI";
    }
  });
}