const openRates = async (base, symbol) => {
  try {
    if (base === 'EUR' && symbol === 'EUR') {
      return {
        rate: 1,
      };
    } else {
      
      const fetchRates = await fetch(`https://api.exchangerate.host/latest?symbols=${symbol}&base=${base}`);
      
      
      const jsonData = await fetchRates.json();
      console.log(jsonData);
      return {
        rate: jsonData.rates[symbol],
      };
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default openRates;
