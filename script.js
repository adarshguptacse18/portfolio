const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

const blogPosts = [
    {
        title: "The Secret to 10X Your Results: The Power of the 12-Week Year",
        url: "https://medium.com/@TheAdarshGupta/the-secret-to-10x-your-results-the-power-of-the-12-week-year-573856927df1",
        date: "February 26, 2024",
        banner: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*VZfq76DkOkPlfyISlUvYnw.jpeg"
    },
    {
        title: "How I Created My AI Girlfriend in 15 Minutes Using OpenAI and ElevenLabs",
        url: "https://medium.com/@TheAdarshGupta/how-i-created-my-ai-girlfriend-in-15-minutes-using-openai-and-elevenlabs-5d2b1cd7dd89",
        date: "June 26, 2023",
        banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*gigYFmEu9ZIN9A6J.jpg"
    },
    {
        title: "Unveiling the Betrayers: Find Out Who Leaked Your Assignments or Messages",
        url: "https://medium.com/@TheAdarshGupta/unveiling-the-betrayers-find-out-who-leaked-your-assignments-or-messages-952265c7574e",
        date: "June 6, 2023",
        banner: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*o0rXDFeFDQu5B6dR.jpg"
    },
    {
        title: "Is ChatGPT Killing Itself with Its Own Brilliance?",
        url: "https://medium.com/@TheAdarshGupta/is-the-chatgpt-killing-itself-with-its-own-brilliance-ebb8a0f3fbeb",
        date: "May 18, 2023",
        banner: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*0tDfeQbv8zx0McNkKBYuOw.jpeg"
    },
];

function displayBlogs() {
    const blogContainer = document.getElementById('blogContainer');

    blogPosts.forEach(post => {
        const blogCard = document.createElement('a');
        blogCard.href = post.url;
        blogCard.className = 'blog-link';
        blogCard.target = '_blank';

        blogCard.innerHTML = `
            <div class="blog-card">
                <img src="${post.banner}" alt="${post.title}" class="blog-banner">
                <div class="blog-content">
                    <h2 class="blog-title">${post.title}</h2>
                    <p class="blog-date">${post.date}</p>
                </div>
            </div>
        `;

        blogContainer.appendChild(blogCard);
    });
}

// Call the function when the page loads
window.addEventListener('load', displayBlogs);

const projects = [
    {
        title: "Visualizing Algorithms",
        description: "Interactive visualization of various algorithms including sorting, pathfinding, and more.",
        demoUrl: "https://visualizing-algorithms.vercel.app/",
        githubUrl: null,
        media: { type: "image", url: "sort.gif" },
        tags: ["Algorithms", "Visualization", "Interactive"]
    },
    {
        title: "Newsletter Service Backend",
        description: "A backend service for newsletter management with features for scheduling and sending content to subscribers.",
        demoUrl: null,
        githubUrl: "https://github.com/adarshguptacse18/newsletter-service-backend",
        media: { type: "image", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9eM6YtID2hQP8ve6HqNuWQfQa1IZLf3oQQ&s" },
        tags: ["Node.js", "RabbitMQ", "PostgreSQL"]
    },
    {
        title: "Login using Zero Knowledge Proof",
        description: "Implemented a login system using zero knowledge proof to ensure password never leaves the client.",
        demoUrl: null,
        githubUrl: "https://github.com/Rio-cyber/VTHacks",
        media: {
            type: "slides", url: "2PACX-1vTRXBEPa7mMeew3DEl1eGwkKusiONWIlJ0uM_6BqbmJGQO1kW5hAwOi-BZakHgtkkYBBwBgXdJ2H0yJ",
        },
        tags: ["Zero Knowledge Proof", "Security", "Authentication"]
    },
    {
        title: "IIT BHU Notes",
        description: "A platform for sharing and accessing academic notes and resources.",
        demoUrl: "https://notes-iitbhu.vercel.app/",
        githubUrl: null,
        media: {
            type: "image", url: "https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX"
        },
        tags: ["Education", "Resources"]
    },
    {
        title: "Handicraft E-commerce Website",
        description: "Developed an E-commerce website and designed the database",
        demoUrl: null,
        media: {
            type: "image", url: "https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2022/04/SkillsAndTech-Jute-Handicrafts-1024x724.jpg"
        },
        githubUrl: "https://github.com/adarshguptacse18/dbms-project",
        tags: ["Java", "DBMS", "SQL"]
    },
];

function createProjectCard(project) {
    const createMediaElement = (media) => {
        if (!media) return '';

        switch (media.type) {
            case "youtube":
                return `
                    <div class="project-media youtube-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${media.url}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            case "slides":
                return `
                    <div class="project-media slides-container">
                        <iframe 
                            src="https://docs.google.com/presentation/d/e/${media.url}/embed?start=false&loop=false&delayms=3000"
                            frameborder="0"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true">
                        </iframe>
                    </div>
                `;
            case "image":
                return `
                    <div class="project-media project-image">
                        <img src="${media.url}" alt="${project.title}">
                    </div>
                `;
            default:
                return '';
        }
    };

    return `
        <div class="project-card">
            ${createMediaElement(project.media)}
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>` : ''}
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

window.addEventListener('load', loadProjects);
