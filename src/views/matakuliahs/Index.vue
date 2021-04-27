<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/creatematakuliahs">Add matakuliahs</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
     
      <th scope="col">Nama Matakuliah</th>
      <th scope="col">SKS</th>
       <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(matakuliah, index) in matakuliahs" :key="index">
     
      <td>{{ matakuliah.nama_matakuliah}}</td>
        <td>{{ matakuliah.sks}}</td>

       <td>       
         <router-link class="btn btn-success" to="/Editmatakuliahs">Edit </router-link>
      <button class="btn btn-danger">delete</button> 
       </td>
    </tr>
  
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue';
import {ref, onMounted } from 'vue';

export default {
  name: 'Home',
  components: {
    Slider,
  },
  setup(){
    let matakuliahs = ref([])

    onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/matakuliahs')
    .then(response => {
      matakuliahs.value = response.data.data
    })
     .catch(error => {
       console.log(error)
     })
    })
   function matakuliahDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/matakuliahs/${id}`)
      .then(()=>{
        let z = this.matakuliahs.map(matakuliahs => matakuliahs.id).indexOf(id);
        this.matakuliahs.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      matakuliahs,
      matakuliahDelete
    }
  }
};
</script>