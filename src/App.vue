<template>
  <div id="app">
  		<h1>{{msg}}</h1>
  		<demo></demo>
  </div>
</template>

<script>
import demo from './components/demo.vue'
export default {
  name: 'app',
  data(){
  	return {
  		msg:'hello vue!'
  	}
  },
  components:{demo}
}
</script>
