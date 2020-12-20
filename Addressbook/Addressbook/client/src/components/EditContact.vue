<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Editing Contact</h1>
          <form v-on:submit.prevent="updateContact">
            <label for="tasknameinput">Please fill the following fields:</label>

            <input v-model="firstname" id="firstnameInput" class="form-control" placeholder="First Name" required/>
            <input v-model="lastname" id="lastnameinput" class="form-control" placeholder="Last Name" required/>
            <input v-model="email" id="emailinput" class="form-control" placeholder="Email" required/>
            <country-select v-model="country" :country="country" topCountry="US"/>
            <br><br>
            <button  @click="$router.push('/')" v-on:click="updateContact(todos.id)" class="btn btn-warning">Edit Contact</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  data() {
    return {
      todos: [],
      id: "",
      firstname: "",
      lastname: "",
      email: "",
       isEdit: false
    };
  },
  mounted() {
  },
  methods: {
    updateContact(id) {
      id = 16;
      axios
        .put(`/api/updateContact/${id}`, { 
          Firstname: this.firstname, 
          Lastname: this.lastname,
          Email: this.email,
          Country: this.Country
          })
        .then(res => {
          //this.firstname = "test"
          // this.isEdit = false
          // this.getTasks()
          console.log("LALAA: " + id);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>