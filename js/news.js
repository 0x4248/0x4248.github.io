/* 0x4248.github.io
 * My github page
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

function getNews() {
    fetch('/news_api.json')
        .then(response => response.json())
        .then(data => {
            let news = data.News;
            for (let i = 0; i < 4; i++) {
                let newsItem = news[i];
                let title = newsItem.Title;
                let description = newsItem.Description;
                let date = newsItem.Date;
                let link = newsItem.Link;
                let newsElement = document.createElement('div');
                console.log(newsElement);
                if (link == undefined) {
                    newsElement.innerHTML = `
                        <div class="section-border-compact">
                            <h3>${title}</h3>
                            <p style="color: var(--light-gray);">${date}</p>
                            <p>${description}</p>
                        </div>
                        <br>
                    `;
                } else {
                    newsElement.innerHTML = `
                        <div class="section-border-compact">
                            <h3><a href="${link}"><i class="bi bi-box-arrow-up-left"></i> ${title}</a></h3>
                            <p style="color: var(--light-gray);">${date}</p>
                            <p>${description}</p>
                        </div>
                        <br>
                    `;
                }
                document.getElementById('news').appendChild(newsElement);
            }
        });
}

getNews();