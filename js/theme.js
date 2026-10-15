const themeToggle = document.querySelector(".navigation .mode");

if (themeToggle) {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";

    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
        themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    };

    applyTheme(initialTheme);

    themeToggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("portfolio-theme", nextTheme);
        applyTheme(nextTheme);
    });
}
