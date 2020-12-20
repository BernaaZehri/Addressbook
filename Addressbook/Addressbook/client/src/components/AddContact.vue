<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Adding new Contact</h1>
          <form v-on:submit.prevent="addContact">
            <label for="tasknameinput">Please fill the following fields:</label>

            <input v-model="firstname" id="firstnameInput" class="form-control" placeholder="First Name" required/>
            <input v-model="lastname" id="lastnameinput" class="form-control" placeholder="Last Name" required/>
            <input v-model="email" id="emailinput" class="form-control" placeholder="Email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" required/>
            <country-select v-model="country" :country="country" class ="form-control" topCountry="US"/>
            <br><br>
            <button  @click="$router.push('/')" v-on:click="addContact(todos.id)" class="btn btn-danger">Add Contact</button>
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
    addContact(id) {
      axios
        .post("/api/addContact", {
          Firstname: this.firstname,
          Lastname: this.lastname,
          Email: this.email,
          Country: this.country
        })
        .then(res => {
          this.getPacientet();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>