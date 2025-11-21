window.insertContent = async function (containerSelector, templatePath, dataList) {
    const container = document.querySelector(containerSelector);
    if (!container) return console.error("Container not found:", containerSelector);

    const template = await fetch(templatePath).then(res => res.text());

    dataList.forEach(data => {
        let html = template;

        for (const key in data) {
            html = html.replaceAll(`{{${key}}}`, data[key]);
        }

        const wrapper = document.createElement("div");
        wrapper.innerHTML = html.trim();

        container.appendChild(wrapper.firstElementChild);
    });
    return true;
};