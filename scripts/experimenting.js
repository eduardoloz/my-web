function createNavigationBar() {
    const navBar = document.createElement("nav");
    navBar.innerHTML = `
        <div class="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
    `;
    return navBar;
}