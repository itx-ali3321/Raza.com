(() => {
    const toggle = document.querySelector("[data-menu-toggle]");
    const links = document.querySelector("[data-menu-links]");

    if (toggle && links) {
        const closeMenu = () => {
            links.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        };
        toggle.addEventListener("click", () => {
            const expanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", String(!expanded));
            links.classList.toggle("is-open", !expanded);
        });
        links.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") closeMenu();
        });
    }
    const form = document.querySelector("[data-contact-form]");
    if (form) {
        const params = new URLSearchParams(window.location.search);
        const requestedService = params.get("service");
        const serviceField = form.elements.namedItem("service");
        if (requestedService && serviceField) serviceField.value = requestedService;

        form.addEventListener("submit", event => {
            event.preventDefault();
            if (!form.reportValidity()) return;

            const values = new FormData(form);
            const service = values.get("service");
            const subject = `Project inquiry: ${service}`;
            const body = [
                `Name: ${values.get("name")}`,
                `Email: ${values.get("email")}`,
                `Service: ${service}`,
                "",
                String(values.get("message") || "")
            ].join("\n");
            const mailto = `mailto:itsali327442@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const note = form.querySelector("[data-form-note]");
            window.location.href = mailto;
            if (note) note.textContent = "Your email app should open with the inquiry filled in. The message has not been sent yet.";
        });
    }
    function toggleTheme() {
        const html = document.documentElement;
        const icon = document.getElementById('themeIcon');
        const current = html.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', next);
        icon.setAttribute('data-lucide', next === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
        localStorage.setItem('theme', next);
    }

    // Restores the saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('themeIcon').setAttribute('data-lucide', savedTheme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
})();
