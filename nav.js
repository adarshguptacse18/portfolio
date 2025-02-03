document.addEventListener('DOMContentLoaded', () => {
    const navHTML = `
        <nav>
            <div class="nav-content">
                <div class="logo"><a href="index.html#home" class="logo-link">Adarsh Gupta</a></div>
                <ul class="nav-links">
                    <li><a href="index.html#home">Home</a></li>
                    <li><a href="index.html#blog">Blog</a></li>
                    <li><a href="index.html#projects">Projects</a></li>
                    <li><a href="index.html#shelf">Shelf</a></li>
                    <li><a href="index.html#talks">Talks</a></li>
                    <li><a href="index.html#collaborate">Collaborate</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}); 