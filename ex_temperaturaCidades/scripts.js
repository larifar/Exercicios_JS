function buscarCidade(){
    const endereco = document.getElementById('endereco').value;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(endereco)}&key=AIzaSyAU9oBQGyn0rvHzY4OVdA0wi3tjC4MFA6o`;

    return fetch(url)
        .then(response => response.json())
        .then(data=> {
            if(data.results.length>0){
                const resultado = data.results[0];
                const latitude = resultado.geometry.location.lat;
                const longitude = resultado.geometry.location.lng;
                return {latitude, longitude};
            } else{
                document.getElementById('lugar').textContent = `Endereço não encontrado`
                return null
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function encontrarTemperatura(coordenadas){
    if(coordenadas){
        fetch(`https://api.weatherbit.io/v2.0/current?lat=${coordenadas.latitude}&lon=${coordenadas.longitude}&lang=pt&key=6c5be626536a4354986145a86ec392a8`)
            .then(response => {
                if (!response.ok) {
                throw new Error("Erro na solicitação!");
                }
                return response.json();
            })
            .then(data => {
                const temperaturaAtual = data.data[0].temp;
                const lugarAtual = data.data[0].city_name;
    
                const elementoTemperatura = document.getElementById('temperatura');
                const elementoLugar = document.getElementById('lugar')
    
                elementoTemperatura.textContent = `A temperatura atual é: ${temperaturaAtual}ºC`
                elementoLugar.textContent = `Previsão do tempo em ${lugarAtual}`
            })
            .catch(error => {
                console.error(error);
            });
    }
}

const btnBuscar = document.getElementById('buscar')
btnBuscar.addEventListener('click', async ()=>{
    try {
        console.log("Esperando cidade")
        const coordenadas = await buscarCidade();
        console.log("Mostrando temperatura")
        encontrarTemperatura(coordenadas)
    } catch (error) {
        console.error(error)
    }
})