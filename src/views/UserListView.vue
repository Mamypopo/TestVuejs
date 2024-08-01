
<template>  
<section>
  <div class="container py-2"> 
    <h2 class="text-center"> User View Dashboard </h2> 
    <div class="justify-content-center d-flex">
     <RouterLink :to="{ name: 'user-add-view' }">
      <button class="button-6" > Add </button>
    </RouterLink>
    </div>
    <table class="table table-bordered text-center table-hover table-dark table-responsive">
      
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col ">Address</th>
      <th scope="col ">Phone Number</th>
      <th scope="col">Gender</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>
    <tr   v-for="(user, index) in userStore.users" :key="user" >
      <td>{{ user.fname }}</td>
      <td> {{ user.lname }}</td>
      <td> {{ user.email }}</td>
      <td class="text-break"> {{ user.address }}</td>
      <td> {{ user.phone }}</td>
      <td> {{ user.gender }}</td>
      <td>
         <RouterLink :to="{ name: 'user-update-view', params: { id: index } }">
          <button class="button-5" >Edit</button>
        </RouterLink>

        <button  class="button-4"  @click="userStore.removeUser(index)">Delete</button>
      </td>
     
    </tr>
  </tbody>
</table>
   
  </div>

  
</section>

</template>
<script setup>
import { RouterLink } from 'vue-router'
  import {  useRouter } from 'vue-router'
  import { useUserStore } from '../stores/user'
  const userStore = useUserStore()
  const router = useRouter()
  

</script>

<style scoped>

.button-4 {
  appearance: none;
  background-color: #ff6868;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}


.button-5 {
  appearance: none;
  background-color: #ffc955;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}
.button-6 {
  appearance: none;
  background-color: #7dffbe;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  margin-bottom: 10px;
}


</style>