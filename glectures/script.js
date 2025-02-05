document.addEventListener('DOMContentLoaded', function() {
    const div = document.getElementById("contents");
    function updateContent() {
        fetch("https://raw.githubusercontent.com/arihara-sudhan/arihara-sudhan.github.io/main/glectures/meta.json")
            .then(resp => resp.json())
            .then(data => {
                let innerContents = '';
                data.forEach(lecture => {
                        innerContents += `
                            <div class="lecture" onclick="window.open('${lecture.url}', '_blank');">
                                <img src="${lecture.cover}" alt="Lecture poster couldn't load">
                                <h3>${lecture.name}</h3>
                            </div>`;
                });
                div.innerHTML = innerContents;
                createTagBanner(tags, tagsElement, data);
            })
            .catch(error => console.error('Error fetching the JSON file:', error));
    }

    updateContent();
});
