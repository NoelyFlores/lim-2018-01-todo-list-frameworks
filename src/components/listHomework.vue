<template>
  <ul class="collapsible">
    <li  v-for ='item in items' :key ='item.id' class="collection-item">
			<div class="collapsible-header" v-if="item.state?color = '#00BCD4':color = 'white'" v-bind:style="{ background: color}">
					<i class="material-icons">chevron_right</i>
						{{item.txt}}
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

</style>

