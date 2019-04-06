new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // アロー関数ならバインド、必要なさそう？
      .then(response => {
        // console.log(response.data.bpi);
        // console.log(response.data.bpi.USD.rate);
        this.bpi = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.hasError = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2);
    }
  }
});
