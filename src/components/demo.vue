<template>
  <div>
  		<h1>{{msg}}</h1>
  </div>
</template>

<script>
require('../style.scss')
export default {
  name: 'app',
  data(){
  	return {
  		msg:'demo'
  	}
  }
}
</script>
