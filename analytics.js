// Eclipse Client GA4 tag and interaction events.
(() => {
    const measurementId = "G-79WVFS57QH";
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: true, transport_type: "beacon" });

    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(tag);

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a");
        const button = event.target.closest("button");
        const summary = event.target.closest("summary");
        const element = link || button || summary;
        if (!element || typeof window.gtag !== "function") return;

        const label = (element.getAttribute("aria-label") || element.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);
        const url = link ? link.href : "";
        let eventName = "site_click";
        if (/discord\.gg/i.test(url)) eventName = "discord_click";
        else if (/download/i.test(label) || /download/i.test(url)) eventName = "download_click";
        else if (link && element.closest("nav")) eventName = "navigation_click";
        else if (summary) eventName = "faq_toggle";
        else if (button) eventName = "button_click";

        window.gtag("event", eventName, {
            link_text: label,
            link_url: url,
            page_path: window.location.pathname
        });
    }, { capture: true });
})();
