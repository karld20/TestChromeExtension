document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY = "0EhAGycfq90y3UQexjbFbw==HWg9kCbD1wUAXrBm"

    convert.addEventListener('click', () => {
        const apiUrl = `https://api.api-ninjas.com/v1/exchangerate?pair=${currency.value}_USD`
        fetch(apiUrl, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                const resultPrice = amount.value * rate;
                result.innerHTML = `${amount.value} ${currency.value} = ${resultPrice.toFixed(2)} USD`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                result.innerHTML = 'An error occured please try again later'
            })
    })
})