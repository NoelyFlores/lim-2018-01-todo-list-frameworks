<template>
 <div class="row">
    <form class="col s12">      
        <h3>To Do List</h3>
        <p>Que hacer hoy?</p>
				<div class="box-insert">
						<div class="box-container-txt">
						<input  v-model="txtHomework" id="last_name" type="text" class="validate">				
						<p>{{message}}</p>
					</div>		
					<div class="box-container-button">
						<span @click="insert()" ><i class="material-icons add">add</i></span>
						<span @click="clean()"><i class="material-icons clean">replay</i></span>
					</div>
				</div>				
			</form>
			<div class="box-list">
				<list-homework :dataList='list'></list-homework>
			</div>
 </div>
</template>
<script>
import listHmw from '@/components/listHomework'
export default {
	name: 'fatherMain',
	data() {
		return {
			txtHomework: '',
			message: '',
			list: []
		}
	},
	created () {
    this.$root.$on('complete-state', (val) => {
			const dataList = this.list;
			const temp = []
			const newData = dataList.map(data => {		
				if(data.id === val.id){
					temp.push({id:data.id, txt:data.txt, state: 'true'})
				}else{
					temp.push({id:data.id, txt:data.txt, state: data.state})					
				}
			})		
			this.list = temp;
		})
		this.$root.$on('delete-list', (val) => {
			const dataList = this.list;
			const newArray = dataList.filter(data => {
				return data.id !== val.id
			})
			this.list = newArray
		})
  },
	components: { 'list-homework': listHmw },
	methods: {
		insert() {
			if(this.txtHomework !== '') {
				const arrayList = this.list
				arrayList.push({id:Date.now(), txt:this.txtHomework, state:''})
				this.txtHomework = ''
			}else{
				this.message = 'Es campo está vacio'
			}

		},
		clean() {
			this.txtHomework = ''
			this.message = ''
		}
	}
}
</script>
<style>
input{
	border: none;
  border-radius: .4em !important;
  width: 100% !important;
  padding: 0em 1em !important;
	margin: 0% !important;
	border-bottom: none !important;
}
form p{
	text-align: center !important;
}
.box-list {
	width: 60%;
	margin: 0% 20%;
}
.box-insert{
border: 1px solid #03A9F4 !important;
    border-radius: .4em !important;
    width: 60% !important;
    margin: 0% 20%;
}
.box-container-txt{
    float: left;
    width: 80%;
}
.box-container-button{
  display: inline-block;
}
.material-icons{
	cursor: pointer;
}
.add, .clean, .done, .delete {  
  font-weight: bold;
}
.add, .done {
	font-size: 2.6em;
  color: #CDDC39;
}
.clean {
	font-size: 2.2em;
	color: #00BCD4
}
.delete {
	font-size: 2.6em;
	color: #212121;
}
.collapsible {
  border-top: none !important;
	border-right: none !important;
	border-left: none !important;
	box-shadow: none !important;
	}
@media(max-width: 480px){
	.box-container-txt {
    width: 75%;
	}
	.box-insert, .box-list{
	  width: 100% !important;
    margin: 0% 0%;
  }	
}
</style>
