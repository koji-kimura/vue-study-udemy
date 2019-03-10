var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    clickHandler: function(event) {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});
