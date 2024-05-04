// Função para enviar os dados para a API
function submitData() {
    // Pegar os valores dos campos
    var apiUrl = document.getElementById('apiUrl').value;
    var apiData = document.getElementById('apiData').value;

    // Realizar a requisição para a API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: apiData
    })
    .then(response => response.json())
    .then(data => {
        // Exibir a resposta da API na div de resposta
        document.getElementById('apiResponse').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        document.getElementById('apiResponse').innerText = 'Erro ao enviar dados';
    });
}
