import axios from 'axios';

const idName = [840, 978];
const currencyСode = ['USD', 'EUR'];

export const serverPrivatBank = async () => {
  const serverDataURL =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  const server = await axios.get(serverDataURL);
  const data = await server.data.filter((x, i, arr) => arr.length - 1 !== i);

  const newData = newObjPrivat(data);

  return newData;
};

function newObjPrivat(data) {
  const arr = [];
  for (const d of data) {
    const obj = {
      name: d.ccy,
      buy: Number(d.buy).toFixed(2),
      sale: Number(d.sale).toFixed(2),
    };

    arr.push(obj);
  }

  return arr;
}

export const serverNbu = async () => {
  const serverDataURL1 =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataFilter = data.filter(
    x => x.r030 === idName[0] || x.r030 === idName[1]
  );

  const neeData = newObjNBY(dataFilter);

  return neeData;
};

function newObjNBY(data) {
  const arr = [];
  for (const d of data) {
    const obj = {
      name: d.cc,
      buy: d.rate.toFixed(2),
      date: d.exchangedate,
    };

    arr.push(obj);
  }

  return arr;
}

export const serverMonoBank = async () => {
  const serverDataURL = 'https://api.monobank.ua/bank/currency';
  const server = await axios.get(serverDataURL);
  const data = await server.data;
  // eslint-disable-next-line array-callback-return
  const dataFilter = data.filter(x => {
    for (let i = 0; i < idName.length; i += 1) {
      if (x.currencyCodeA === idName[i] && x.currencyCodeB === 980) {
        x.currencyCodeA = currencyСode[i];
        return x;
      }
    }
  });

  const newData = newObjMono(dataFilter);
  return newData;
};

function newObjMono(data) {
  const arr = [];
  for (const d of data) {
    const obj = {
      name: d.currencyCodeA,
      buy: Number(d.rateBuy).toFixed(2),
      sale: Number(d.rateSell).toFixed(2),
    };

    arr.push(obj);
  }

  return arr;
}

export const serverWorldBank = async () => {
  const serverDataURL1 =
    'https://api.exchangerate.host/latest?base=UAH&symbols=EUR,USD';
  const server = await axios.get(serverDataURL1);
  const data = await server.data;
  const dataKey = await Object.keys(data.rates);
  const dataValue = await Object.values(data.rates);
  const newData = newObjWorld(dataKey, dataValue, data.date);

  return newData;
};

function newObjWorld(dataKey, dataValue, date) {
  const arr = [];
  for (let i = 0; i < dataKey.length; i++) {
    arr.push({
      name: dataKey[i],
      buy: (1 / dataValue[i]).toFixed(2),
      date: date.split('-').reverse().join('.'),
    });
  }

  return arr;
}

export const cacl = async (to = 'UAH', result = 'USD') => {
  const serverDataURL = `https://api.exchangerate.host/convert?from=${to}&to=${result}`;
  const server = await axios.get(serverDataURL);
  const data = await server.data;
  return data;
};
