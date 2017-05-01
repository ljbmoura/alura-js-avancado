var campos = [ document.querySelector('#data'), document.querySelector('#valor'), document.querySelector('#quantidade') ];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var linha = document.createElement('tr');
    campos.forEach(function(campo) {
	var coluna = document.createElement('td');
	coluna.textContent = campo.value;
	linha.appendChild(coluna);
    });

    var colunaVolume = document.createElement('td');
    colunaVolume.textContent = (campos[1].value * campos[2].value).toFixed(2);

    linha.appendChild(colunaVolume);

    tbody.appendChild(linha);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
})