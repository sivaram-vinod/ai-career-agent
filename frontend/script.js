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
            const text = await response.text();
            throw new Error(text);
        }

        const data = await response.json();

        /* ---------------- Career Paths ---------------- */
        let careerPaths = data.career_paths;
        if (typeof careerPaths === "string") {
            careerPaths = JSON.parse(careerPaths);
        }
        document.getElementById("career").innerText =
            Array.isArray(careerPaths)
                ? careerPaths.join(", ")
                : careerPaths;

        /* ---------------- Learning Roadmap ---------------- */
        let roadmap = data.learning_roadmap;
        if (typeof roadmap === "string") {
            try {
                roadmap = JSON.parse(roadmap);
                document.getElementById("roadmap").innerText =
                    Object.values(roadmap).join("\n");
            } catch {
                document.getElementById("roadmap").innerText = roadmap;
            }
        } else {
            document.getElementById("roadmap").innerText = roadmap;
        }

        /* ---------------- Resume Points ---------------- */
        const resumeList = document.getElementById("resume");
        resumeList.innerHTML = "";

        let resumePoints = data.resume_points;
        if (typeof resumePoints === "string") {
            resumePoints = JSON.parse(resumePoints);
        }

        resumePoints.forEach(point => {
            const li = document.createElement("li");
            li.innerText = point.trim();
            resumeList.appendChild(li);
        });

        resultCard.style.display = "block";
        resultCard.scrollIntoView({ behavior: "smooth" });

    } catch (err) {
        console.error("Frontend error:", err);
        error.innerText = "Something went wrong. Please try again.";
    }

    loading.style.display = "none";
    button.disabled = false;
}
