function elementFromHtml(html) {
    const template = document.createElement("template");

    template.inneHTML = html.trim();

    return template.content.firstElementChild;
}