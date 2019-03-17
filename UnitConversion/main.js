new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0,
    mm: 0
  },
  watch: {
    km: function(value) {
      // console.log(value);
      this.km = value;
      this.m = value * 1000;
      this.mm = value * 1000000;
    },
    m: function(value) {
      // console.log(value);
      this.km = value / 1000;
      this.m = value;
      this.mm = value * 1000;
    },
    mm: function(value) {
      // console.log(value);
      this.km = value / 1000000;
      this.m = value / 1000;
      this.mm = value;
    }
  }
});
