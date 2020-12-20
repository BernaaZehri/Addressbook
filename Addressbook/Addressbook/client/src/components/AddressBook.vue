<template>
  <div class="hello">
    <div id="todo-list-example" class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1 class="text-center">Address Book</h1>
          <h6 class="text-center">Click the button below to add new Contact:</h6>
          <button @click="$router.push('addContact')" class="btn btn-success">Add</button>
          <br>
          <table class="table">
            <tr>
              <td class="text-left">
                <strong>First Name</strong>
              </td>
              <td class="text-left">
                <strong>Last Name</strong>
              </td>
              <td class="text-left">
                <strong>Email</strong>
              </td>
              <td class="text-left">
                <strong>Country</strong>
              </td>
              <td></td>
            </tr>
            <tr v-for="(todo) in todos" v-bind:key="todo.id" v-bind:title="todo.Firstname">
              <td class="text-left">{{todo.Firstname}}</td>
              <td class="text-left">{{todo.Lastname}}</td>
              <td class="text-left">{{todo.Email}}</td>
              <td class="text-left">{{todo.Country}}</td>
              <td class="text-right">
                <button @click="$router.push('editContact')" class="btn btn-warning">Edit</button>
              </td>
              <td class ="text-right">
                <button v-on:click="deleteContact(todo.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      country: "",
      isEdit: false
    };
  },
  mounted() {
    this.getAllContacts();
  },
  methods: {
    getAllContacts() {
      axios.get("/api/contacts").then(
        result => {
          console.log(result.data);
          this.todos = result.data;
        },
        error => {
          console.error(error);
        }
      );
    },

    deleteContact(id) {
      axios
        .delete(`/api/deleteContact/${id}`)
        .then(res => {
          this.emri = "";
          this.getPacientet();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>