<template>
  <ul class="collapsible">
    <li  v-for ='item in items' :key ='item.id' class="collection-item">
			<div class="collapsible-header" v-bind:class="{ 'color': item.state, 'c-white': !item.state	}"  @dblclick="update(item.id)">
					<i class="material-icons" v-if="!item.update">chevron_right</i>
						<label v-if="!item.update">{{item.txt}}</label>
            <input v-else class="edit" type="text"
              v-model="item.txt"
              @blur="cancelUpdate(item.id)"
              @keyup.enter="cancelUpdate(item.id)">
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
        edit: false
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
      },
      update(id) {
        this.$root.$emit('update-list',{id:id, option:'update'})
      },
      cancelUpdate(id) {
        this.$root.$emit('update-list',{id:id, option:'cancelUpdate'})
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
.material-icons input{
  width: 70% !important;
  background: red !important;
}
#edit{
  background: blue;
}
</style>

