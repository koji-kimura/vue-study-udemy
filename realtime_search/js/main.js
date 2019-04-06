var app = new Vue({
  el: '#app',
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {
    keyword: function(newKeyWord, oldKeyword) {
      //   console.log(newKeyWord);
      this.message = 'waiting for you to stop typing...';
      this.debouncedGetAnswer();
    }
  },
  // mountedでも大差はないとのこと
  created() {
    // this.keyword = 'Javascript';
    // this.getAnswer();
    // △ debounceは跳ね返り
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer() {
      if (this.keyword === '') {
        this.items = null;
        this.message = '';
        return;
      }
      this.message = 'Loading';
      var params = { page: 1, per_page: 20, query: this.keyword };
      axios
        .get('https://qiita.com/api/v2/items', { params })
        .then(response => {
          console.log(response);
          this.items = response.data;
        })
        .catch(error => {
          this.message = 'Error!' + error;
        })
        .finally(() => {
          this.message = '';
        });
    }
  }
});
