// Manipulacion de las categorias

fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        const categories = document.getElementsByClassName('container-ability');
        const finalScore = document.getElementsByClassName('container-circle-result');
        let sum = 0;
        for (let i = 0; i < categories.length; i++) {
            if (i === 0) {
                categories[0].innerHTML = `
                <p class="ability reaction"><img src="${data[i].icon}" alt="memory-icon">${data[i].category}</p>
                <p class="score"><span>${data[i].score}</span> / 100</p>
            `;
            } else if (i === 1) {
                categories[1].innerHTML = `
                <p class="ability memory"><img src="${data[i].icon}" alt="memory-icon">${data[i].category}</p>
                <p class="score"><span>${data[i].score}</span> / 100</p>
            `;
            } else if (i === 2) {
                categories[2].innerHTML = `
                <p class="ability verbal"><img src="${data[i].icon}" alt="memory-icon">${data[i].category}</p>
                <p class="score"><span>${data[i].score}</span> / 100</p>
            `;
            } else if (i === 3) {
                categories[3].innerHTML = `
                <p class="ability visual"><img src="${data[i].icon}" alt="memory-icon">${data[i].category}</p>
                <p class="score"><span>${data[i].score}</span> / 100</p>
            `;
            }

            sum += data[i].score / 4;
        }

        // Final Score
        finalScore[0].innerHTML = `
            <h1>${sum.toFixed()}</h1>
            <p>to 100</p>
        `;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

