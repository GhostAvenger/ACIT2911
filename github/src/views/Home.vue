<template>
  <div>
    <button @click='showMessageFrom = ! showMessageFrom' type="button" class="btn btn-primary mt-3 mb-3">Toggle message form</button>
    <form v-if="showMessageFrom" @submit.prevent="addMessage" class="mb-2">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{error}}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="message.username" type="text" class="form-control" id="username" placeholder="Enter Username" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input v-model="message.subject" type="text" class="form-control" id="subject" placeholder="Enter a subject" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="message.message" class="form-control" id="message" rows="3"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>
    <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
      <li class="media">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{message.username}}</h4>
          <h5 class="mt-0 mb-1">{{message.subject}}</h5>
          {{message.message}}
          <br />
          <small>{{message.created}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
  const API_URL = "http://localhost:8080/messages";

export default {
  name: 'home',
  data: () => ({
    showMessageFrom: false,
    error: '',
    messages: [],
    message: {
      username: 'Anonymous',
      subject: '',
      message: ''
    }
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    }
  },
  mounted(){
    fetch(API_URL).then(response => response.json()).then(result => {
      this.messages = result;
    });
  },
  methods: {
    addMessage() {
      console.log(this.message);
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json()).then(result => {
          if (result.details) {
            // there was an error ...
            const error = result.details.map(detail => detail.message).join('. ');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageFrom = false;
            this.messages.push(result);
          }
      });
    }
  }
};
</script>

<style>
  hr{
    border-top: 1px solid white;
  }

  img {
    max-width: 300px;
    height: auto;
  }
  body{
    background-image: url("../images/background6.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 800px;
    color: #ffffff;
  }

</style>
