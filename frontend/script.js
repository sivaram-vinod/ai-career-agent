async function analyzeCareer() {
    const skills = document.getElementById("skills").value.trim();
    const interests = document.getElementById("interests").value.trim();
    const education = document.getElementById("education").value.trim();

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const resultCard = document.getElementById("result");
    const button = document.getElementById("analyzeBtn");

    error.innerText = "";
    resultCard.style.display = "none";

    if (!skills || !interests || !education) {
        error.innerText = "Please fill in all fields.";
        return;
    }

    loading.style.display = "block";
    button.disabled = true;

    try {
        const response = await fetch(
            "https://ai-career-agent-backend.onrender.com/analyze",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ skills, interests, education })
            }
        );

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        // Populate results
        document.getElementById("career").innerText = data.career_paths;
        document.getElementById("roadmap").innerText = data.learning_roadmap;

        const resumeList = document.getElementById("resume");
        resumeList.innerHTML = "";

        // Handle resume_points as string or array
        let resumePoints = data.resume_points;
        if (typeof resumePoints === "string") {
            resumePoints = JSON.parse(resumePoints);
        }

        resumePoints.forEach(point => {
            const li = document.createElement("li");
            li.innerText = point;
            resumeList.appendChild(li);
        });

        // Show result card and scroll smoothly
        resultCard.style.display = "block";
        resultCard.scrollIntoView({ behavior: "smooth" });

    } catch (err) {
        console.error("Frontend error:", err);
        error.innerText = "Something went wrong. Please try again.";
    }

    loading.style.display = "none";
    button.disabled = false;
}
