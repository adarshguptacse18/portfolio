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