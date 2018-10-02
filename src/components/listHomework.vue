<template>
  <ul class="collapsible">
    <li  v-for ='item in items' :key ='item.id' class="collection-item">
			<div class="collapsible-header" v-bind:class="{ 'color': item.state, 'c-white': !item.state	}">
					<i class="material-icons">chevron_right</i>
						<label>{{item.txt}}</label>
					<!-- 	<label>{{item.state}}</label> -->
						<span class="badge">
						<i @click="completeHmw(item.id)" class="material-icons done">done</i>
						<i @click="deleteHmw(item.id)" class="material-icons delete">delete</i>
					</span>			
			</div>      
    </li>
 </ul>
</template>
<script>
export default {
    name: 'listHmw',
    props: ['dataList'],
    data() {
      return {
				items: this.dataList,
				color: '',
      }
    },
    watch: {    
    dataList: function (newVal, oldVal) {
     this.items = newVal
    }
  },
    methods: {
      completeHmw(id) {
        this.$root.$emit('complete-state', {id: id})
      },
      deleteHmw(id) {
        this.$root.$emit('delete-list', {id:id})
      }
    }
}
</script>
<style>
.color {
	background-color: #babebe75;;
}
.color label{
	text-decoration: line-through;
	color: #6a6c6d;	
}
label {
  font-size: 1rem !important;
}
.c-white {
	background-color: white
}
</style>

