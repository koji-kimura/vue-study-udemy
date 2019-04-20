<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent ='appQuote'">Quote</button>
                <button @click="selectedComponent ='appAuther'">Auther</button>
                <button @click="selectedComponent ='appNew'">New</button>
                <p>{{selectedComponent}}</p>
                <!-- keep-alive属性でコンポーネントが破壊されないでそのまま保存される -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>default Content</p>
                    </component>
                </keep-alive>
                <!-- <app-quote>
                    <h2 slot="title">{{quroteTitle}}</h2>
                    <p>Awouterful Quote</p>
                    <p slot="subtitle">Awouterful Quote!!!!</p>
                </app-quote>
                <app-auther></app-auther>
                <app-new></app-new> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import Auther from './components/Auther.vue';
import New from './components/New.vue';
export default {
  data: function() {
    return {
      quroteTitle: 'the quote',
      selectedComponent: 'appQuote'
    };
  },
  components: {
    appQuote: Quote,
    appAuther: Auther,
    appNew: New
  }
};
</script>

<style>
</style>
