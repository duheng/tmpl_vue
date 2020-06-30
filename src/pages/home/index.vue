<template>
  <div  class="home">
    <h1>Welcome to the mozi project</h1>
     <router-link to="/about">Go to About</router-link>

  </div>

</template>

<script>
export default {
   data(){
    return {
        selected: 'A',
	    options: [
	      { text: 'One', value: 'A' },
	      { text: 'Two', value: 'B' },
	      { text: 'Three', value: 'C' }
	    ],
	    message:'',
	    todos: [
	      { text: 'list A' },
	      { text: 'list B' },
	      { text: 'list C' }
	    ]
		
	}
   },
   created(){
　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      //  this.selected = this.options[0].value;
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
	text-align: center;
}
h1 {
  margin: 40px auto;
}
a {
  color: red;
}

</style>
