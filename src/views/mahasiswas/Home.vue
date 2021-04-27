<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createmahasiswas">Add mahasiswas</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
     <th scope="col">Id Mahasiswa</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Alamat</th>
      <th scope="col">No Tlp</th>
      <th scope="col">Email</th>
        <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="(mahasiswa, index) in mahasiswas" :key="index">
      <td>{{mahasiswa.id}}</td>
      <td>{{ mahasiswa.nama_mahasiswa}}</td>
        <td>{{ mahasiswa.alamat}}</td>
        <td>{{ mahasiswa.no_tlp}}</td>
        <td>{{ mahasiswa.email}}</td>
     
       <td>
        <router-link class="btn btn-success" :to="{name:'Editmahasiswas', params:{id:mahasiswa.id}}">Edit</router-link>
        <button @click.prevent="mahasiswaDelete(mahasiswa.id)" class="btn btn-danger">Delete</button>
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
    let mahasiswas = ref([])

    onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/mahasiswas')
    .then(response => {
      mahasiswas.value = response.data.data
    })
     .catch(error => {
       console.log(error)
     })
    })
  
  function mahasiswaDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/mahasiswas/${id}`)
      .then(()=>{
        let z = this.mahasiswas.map(mahasiswas => mahasiswas.id).indexOf(id);
        this.mahasiswas.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      mahasiswas,
      mahasiswaDelete
    }
  }
};
</script>