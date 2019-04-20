<template>
  <div>
    <div class="title">
      <!-- slotは名前で要素指定することができる -->
      <slot name="title"></slot>
      <!-- <span style="color:#ccc"><slot name="subtitle">The subtitle</slot></span> -->
      <span style="color:#ccc"><slot name="subtitle"></slot></span>
    </div>
    <div>
      <!-- 名前指定しないとデフォルトで表示される -->
      <slot></slot>
    </div>
    <!-- <p>A wonderful Quote!</p> -->
    <!-- <p>{{ quote }}</p> -->
    <!-- <slot></slot> -->
  </div>  
</template>

<script>
export default {
  props: ['quote']
};
</script>
<style scoped>
/* slotのスタイルは子供コンポーネント側から当てる */
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
}

.title {
  font-style: italic;
}
</style>
