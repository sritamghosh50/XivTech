const data = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$93,759.48",
    h1: 0.43,
    h24: 0.93,
    d7: 11.11,
    marketCap: "$1,861,618,902,186",
    volume: "$43,874,950,947",
    supply: "19.85M BTC",
    sparkline: "📈"
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$1,802.46",
    h1: 0.60,
    h24: 3.21,
    d7: 13.68,
    marketCap: "$217,581,279,327",
    volume: "$23,547,469,307",
    supply: "120.71M ETH",
    sparkline: "📈"
  },
  {
    rank: 3,
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    h1: 0.00,
    h24: 0.00,
    d7: 0.04,
    marketCap: "$145,320,022,085",
    volume: "$92,288,882,007",
    supply: "145.27B USDT",
    sparkline: "📉"
  },
  {
    rank: 4,
    name: "XRP",
    symbol: "XRP",
    price: "$2.22",
    h1: 0.46,
    h24: 0.54,
    d7: 6.18,
    marketCap: "$130,073,814,966",
    volume: "$5,131,481,491",
    supply: "58.39B XRP",
    sparkline: "📈"
  },
  {
    rank: 5,
    name: "BNB",
    symbol: "BNB",
    price: "$606.65",
    h1: 0.09,
    h24: -1.20,
    d7: 3.73,
    marketCap: "$85,471,956,947",
    volume: "$1,874,281,784",
    supply: "140.89M BNB",
    sparkline: "📈"
  },
  {
    rank: 6,
    name: "Solana",
    symbol: "SOL",
    price: "$151.51",
    h1: 0.53,
    h24: 1.26,
    d7: 14.74,
    marketCap: "$78,381,958,631",
    volume: "$4,881,674,486",
    supply: "517.31M SOL",
    sparkline: "📈"
  },
  {
    rank: 7,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.48",
    h1: 0.28,
    h24: 1.75,
    d7: 8.91,
    marketCap: "$16,881,123,456",
    volume: "$881,234,567",
    supply: "35.12B ADA",
    sparkline: "📈"
  },
  {
    rank: 8,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.17",
    h1: 0.30,
    h24: 2.21,
    d7: 5.67,
    marketCap: "$24,223,456,789",
    volume: "$1,098,765,432",
    supply: "140.1B DOGE",
    sparkline: "📈"
  },
  {
    rank: 9,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$38.52",
    h1: 0.35,
    h24: 1.85,
    d7: 10.23,
    marketCap: "$14,335,678,123",
    volume: "$903,567,234",
    supply: "377.75M AVAX",
    sparkline: "📈"
  },
  {
    rank: 10,
    name: "Polkadot",
    symbol: "DOT",
    price: "$7.14",
    h1: 0.40,
    h24: 2.10,
    d7: 9.12,
    marketCap: "$9,876,123,456",
    volume: "$776,345,210",
    supply: "1.3B DOT",
    sparkline: "📈"
  },
  {
    rank: 11,
    name: "TRON",
    symbol: "TRX",
    price: "$0.13",
    h1: 0.12,
    h24: 0.56,
    d7: 2.67,
    marketCap: "$11,999,456,789",
    volume: "$345,123,789",
    supply: "88.25B TRX",
    sparkline: "📈"
  },
  {
    rank: 12,
    name: "Chainlink",
    symbol: "LINK",
    price: "$15.73",
    h1: 0.65,
    h24: 1.92,
    d7: 12.87,
    marketCap: "$8,321,456,987",
    volume: "$603,456,891",
    supply: "528.78M LINK",
    sparkline: "📈"
  },
  {
    rank: 13,
    name: "Polygon",
    symbol: "MATIC",
    price: "$1.04",
    h1: 0.44,
    h24: 1.32,
    d7: 7.89,
    marketCap: "$9,234,678,321",
    volume: "$543,567,899",
    supply: "8.78B MATIC",
    sparkline: "📈"
  },
  {
    rank: 14,
    name: "Toncoin",
    symbol: "TON",
    price: "$5.32",
    h1: 0.50,
    h24: 1.15,
    d7: 6.76,
    marketCap: "$17,456,321,123",
    volume: "$345,456,789",
    supply: "3.3B TON",
    sparkline: "📈"
  },
  {
    rank: 15,
    name: "Litecoin",
    symbol: "LTC",
    price: "$92.88",
    h1: 0.48,
    h24: 0.93,
    d7: 4.57,
    marketCap: "$6,234,567,890",
    volume: "$567,345,123",
    supply: "73.14M LTC",
    sparkline: "📈"
  }
];

const tbody = document.getElementById("crypto-data");

data.forEach(coin => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${coin.rank}</td>
    <td><img class="icon" src="https://cryptoicons.org/api/icon/${coin.symbol.toLowerCase()}/32" alt=""> ${coin.name} ${coin.symbol}</td>
    <td>${coin.price}</td>
    <td class="${coin.h1 >= 0 ? 'green' : 'red'}">${coin.h1}%</td>
    <td class="${coin.h24 >= 0 ? 'green' : 'red'}">${coin.h24}%</td>
    <td class="${coin.d7 >= 0 ? 'green' : 'red'}">${coin.d7}%</td>
    <td>${coin.marketCap}</td>
    <td>${coin.volume}</td>
    <td>${coin.supply}</td>
    <td>${coin.sparkline}</td>
  `;
  tbody.appendChild(row);
});
