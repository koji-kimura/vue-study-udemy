var app = new Vue({
  el: '#app',
  data: {
    colors: [{ name: 'red' }, { name: 'green' }, { name: 'blue' }]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('update');
        console.log(
          'new: %s,oldValue: %s',
          JSON.stringify(newValue, null, '\t'),
          JSON.stringify(oldValue, null, '\t')
        );
      },
      deep: true,
      // 初期読み込み時に適用される
      immediate: true
    }
  }
});
