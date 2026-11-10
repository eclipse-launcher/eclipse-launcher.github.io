// Eclipse Client Google Tag Manager loader and interaction events.
(() => {
    const containerId = "GTM-MWVDJP7H";
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    const firstScript = document.getElementsByTagName("script")[0];
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    firstScript.parentNode.insertBefore(tag, firstScript);

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        const button = event.target.closest("button");
        const summary = event.target.closest("summary");
        const element = link || button || summary;
        if (!element) return;

        const label = (element.getAttribute("aria-label") || element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);
        const url = link ? link.href : "";
        let eventName = "site_click";
        if (/discord\.gg/i.test(url)) eventName = "discord_click";
        else if (/download/i.test(label) || /download/i.test(url)) eventName = "download_click";
        else if (link && element.closest("nav")) eventName = "navigation_click";
        else if (summary) eventName = "faq_toggle";
        else if (button) eventName = "button_click";

        window.dataLayer.push({
            event: eventName,
            link_text: label,
            link_url: url,
            page_path: window.location.pathname
        });
    }, { capture: true });
})();
