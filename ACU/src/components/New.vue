<template>
  <div>
    <h3>the Quote</h3>
    <p>{{counter}}</p>
    <button @click="counter++">increase</button>
  </div>  
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  // じゃあ、切り替わったときどうやってライフサイクルでイベンツフックするのさ？の答え
  activated() {
    console.log('act');
  },
  deactivated() {
    console.log('deact');
  },
  destroyed() {
    console.log('dest');
  }
};
</script>
<style scoped>
</style>
