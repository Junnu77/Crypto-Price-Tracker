

async function getData(param) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${param}&x_cg_demo_api_key=CG-94TWLY19dF2QDngYZymhbSDX`);
    const data = await response.json();
    // console.log(data);

    document.querySelector('.side-text-part').innerHTML = `
        <img src=${data[0].image} style="height:40%; margin-bottom:15px;">
        <p style="font-size:25px; font-family:sans-serif"><strong>${data[0].name}</strong></p>
    `
    document.querySelector('.text-part').innerHTML = `
        <p style="font-size:20px"><strong>Current Price : </strong>${data[0].current_price}$</p>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>24h low : </strong>${data[0].low_24h}$</p> <p><strong>24h high : </strong>${data[0].high_24h}$</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>24h price change : </strong>${data[0].price_change_24h}$</p> <p><strong>24h price change(%) : </strong>${data[0].price_change_percentage_24h} %</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>Market cap : </strong>${data[0].market_cap}$</p> <p><strong>Market cap rank : </strong>${data[0].market_cap_rank}</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>Circulating Supply : </strong>${data[0].circulating_supply}</p> <p><strong>Total Supply : </strong>${data[0].total_supply}</p></span>
    `
}

async function getInputResp() {
    const inputVal = document.querySelector('input').value;
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${inputVal}&x_cg_demo_api_key=CG-94TWLY19dF2QDngYZymhbSDX`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.side-text-part').innerHTML = `
        <img src=${data[0].image} style="height:40%; margin-bottom:15px;">
        <p style="font-size:25px; font-family:sans-serif"><strong>${data[0].name}</strong></p>
    `
    document.querySelector('.text-part').innerHTML = `
        <p style="font-size:20px"><strong>Current Price : </strong>${data[0].current_price}$</p>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>24h low : </strong>${data[0].low_24h}$</p> <p><strong>24h high : </strong>${data[0].high_24h}$</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>24h price change : </strong>${data[0].price_change_24h}$</p> <p><strong>24h price change(%) : </strong>${data[0].price_change_percentage_24h} %</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>Market cap : </strong>${data[0].market_cap}$</p> <p><strong>Market cap rank : </strong>${data[0].market_cap_rank}</p></span>
        <span style="height:auto; width:90%; display:flex; justify-content:space-between; font-size:15px"><p><strong>Circulating Supply : </strong>${data[0].circulating_supply}</p> <p><strong>Total Supply : </strong>${data[0].total_supply}</p></span>
    `
}