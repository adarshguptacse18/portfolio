function setupNavListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
}

const blogPosts = [
    {
        title: "Designing A personalized search engine",
        type: "gdoc",
        url: "2PACX-1vSrF7GFsjFkGD5hKGG_ad1Sf8CXXIbKMlfmnBap3k3FNkPxtzW8qYFaa_XMXNDLpBA_CnCrpdhyZ-aJ", // Google Doc ID
        date: "July, 2024",
        banner: "https://aisera.com/wp-content/uploads/2024/09/search-personalization.png"
    },
    {
        title: "The Secret to 10X Your Results: The Power of the 12-Week Year",
        type: "medium",
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
        blogCard.className = 'blog-link';
        blogCard.target = '_blank';
        
        // Set the correct URL based on post type
        if (post.type === 'gdoc') {
            blogCard.href = `https://docs.google.com/document/d/${post.url}/view`;
        } else {
            blogCard.href = post.url;
        }
        
        blogCard.innerHTML = `
            <div class="blog-card">
                <img src="${post.banner}" alt="${post.title}" class="blog-banner">
                <div class="blog-content">
                    <h2 class="blog-title">${post.title}</h2>
                    <div class="blog-meta">
                        <p class="blog-date">${post.date}</p>
                        <span class="blog-type ${post.type}">${post.type === 'gdoc' ? 'Google Doc' : 'Medium'}</span>
                    </div>
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
        media: { type: "image", url: "images/sort.gif" },
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

    const linkUrl = project.demoUrl || project.githubUrl || '#';
    
    return `
        <a href="${linkUrl}" target="_blank" class="project-card-link">
            <div class="project-card">
                ${createMediaElement(project.media)}
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    ${project.demoUrl ? `<span class="project-link">Live Demo</span>` : ''}
                    ${project.githubUrl ? `<span class="project-link">GitHub</span>` : ''}
                </div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `;
}

function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    projectsContainer.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

window.addEventListener('load', loadProjects);

// Sample data structure for shelf items
const shelfData = {
    books: [
        {
            title: "Designing Data-Intensive Applications",
            author: "Martin Kleppmann",
            status: "reading",
            progress: "Chapter 8"
        },
        {
            title: "Database Internals",
            author: "Alex Petrov",
            status: "reading",
            progress: "Chapter 11"
        },
        {
            title: "Yellow Pages - Operating System Concepts",
            author: "Silberschatz, Galvin, and Gagne",
            status: "completed",
            progress: "done"
        }
    ],
    articles: [
        {
            title: "What You'll Wish You'd Known",
            url: "https://paulgraham.com/hs.html?viewfullsite=1"
        }
    ],
    courses: [
        {
            title: "Grokking SOLID Design Principles",
            platform: "Design Gurus",
            completion: "100%",
            url: "https://www.designgurus.io/course/grokking-solid-design-principles",
            notes: "http://thecyberwizard.notion.site"
        },
        {
            title: "Fundamentals of Database Engineering",
            platform: "Udemy",
            completion: "100%",
            url: "https://www.udemy.com/course/database-engines-crash-course/?couponCode=NVDIN35"
        },
        {
            title: "Fundamentals of Network Engineering",
            platform: "Udemy",
            completion: "100%",
            url: "https://www.udemy.com/course/fundamentals-of-networking-for-effective-backend-design/?couponCode=NET-JAN2025-L"
        },
        {
            title: "Fundamentals of Database Engineering",
            platform: "Udemy",
            completion: "100%",
            url: "https://www.udemy.com/course/database-engines-crash-course/?couponCode=DB-JAN2025-L"
        }
    ],
    videos: [
        // {
        //     title: "JavaScript Event Loop Explained",
        //     channel: "Fireship",
        //     url: "https://youtube.com/..."
        // }
    ],
};

const talksData = [
    {
        title: "Story of Adarsh Gupta - A new credit card user",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=LH4LXvUZUCw&t=30s"
    },
    {
        title: "He has cracked 7 companies including Google, Salesforce, Uber, Sprinklr",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=Q7dF7qx8N0Y"
    },
    {
        title: "All about Competitive Programming",
        platform: "YouTube",
        url: "https://www.youtube.com/watch?v=NQnLsze2cWo"
    },
];

function renderShelf() {
    const shelfTitle = document.querySelector('.shelf-container h2');
    if (shelfTitle) {
        shelfTitle.style.marginBottom = '2rem';  // Add space after the title
    }

    // Only render sections that have items
    if (shelfData.books.length > 0) renderBooks();
    if (shelfData.articles.length > 0) renderArticles();
    if (shelfData.courses.length > 0) renderCourses();
    if (shelfData.videos.length > 0) renderVideos();
    
    // Hide empty section containers
    document.querySelectorAll('.shelf-section').forEach(section => {
        const itemsList = section.querySelector('.shelf-items');
        if (!itemsList.children.length) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

function renderBooks() {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = shelfData.books.map(book => `
        <div class="shelf-item">
            <h4>${book.title}</h4>
            <p>By ${book.author}</p>
            <span class="book-status status-${book.status}">
                ${book.status === 'completed' ? 'Completed' : `${book.status.charAt(0).toUpperCase() + book.status.slice(1)} - ${book.progress}`}
            </span>
        </div>
    `).join('');
}

function renderArticles() {
    const articlesList = document.getElementById('articles-list');
    articlesList.innerHTML = shelfData.articles.map(article => `
        <a href="${article.url}" target="_blank" class="shelf-item-link">
            <div class="shelf-item">
                <h4>${article.title}</h4>
                ${article.source ? `<p>Source: ${article.source}</p>` : ''}
            </div>
        </a>
    `).join('');
}

function renderCourses() {
    const coursesList = document.getElementById('courses-list');
    coursesList.innerHTML = shelfData.courses.map(course => `
        <div class="shelf-item">
            <h4>${course.title}</h4>
            <p>Platform: ${course.platform}</p>
            <div class="completion-status">Completion: ${course.completion}</div>
            <div class="course-links">
                <a href="${course.url}" target="_blank" class="course-link">Course</a>
                ${course.notes ? `<a href="${course.notes}" target="_blank" class="notes-link">| Notes</a>` : ''}
            </div>
        </div>
    `).join('');
}

function renderTalks() {
    const talksList = document.getElementById('talks-list');
    talksList.innerHTML = talksData.map(talk => {
        const isYouTube = talk.platform.toLowerCase() === "youtube";
        const videoId = isYouTube ? new URL(talk.url).searchParams.get("v") : null;
        
        return `
            <div class="talks-item">
                <h4>${talk.title}</h4>
                <p>Platform: ${talk.platform}</p>
                ${isYouTube && videoId ? `
                    <div class="youtube-container">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                ` : `
                    <a href="${talk.url}" target="_blank" class="shelf-item-link">Watch Talk</a>
                `}
            </div>
        `;
    }).join('');
}


// Add this to your initialization code
document.addEventListener('DOMContentLoaded', () => {
    // Call setupNavListeners after the nav is inserted
    setupNavListeners();
    
    // Existing code for other functionalities
    renderShelf();
    renderTalks();
});
