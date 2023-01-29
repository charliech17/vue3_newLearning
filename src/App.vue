<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org" target="_blank">
      <img src="/typescript.png" class="logo typescript" alt="Vue logo" />
    </a>
    <p @click="plusCount">{{ state.counter1 }}</p>
    <h5>Your name: </h5>
    <p>{{ state.user1.name }}</p>
    <input type="text" v-model="state.user1.name">
    <h3>Pinia</h3>
    <p @click="exampleStore.counter++">{{exampleStore.counter}}</p>
  </div>
</template>

<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import {counterType, userType} from '../type/appType'
import { reactive } from 'vue'
import { useExampleStore } from '../stores/index'

// state
const state = reactive({
  counter1: 1 as counterType,
  user1: {
    name: 'kuoChuan',
    age: 18,
    habbit: 'playing basketball',
    isSingle: true,
    course: ['physic','math','chemical'],
    afterTenyear: {
      job: 'front-end developer',
      wifeName: 'sherry',
    }
  } as userType
})
// functions
const plusCount = () => { 
  console.log('hello count')
  state.counter1++ 

}

const exampleStore = useExampleStore()
exampleStore.counter++
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.typescript:hover {
  filter: drop-shadow(0 0 2em #6360f0aa);
}
</style>
