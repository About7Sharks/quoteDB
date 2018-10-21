<template>
  <div>
    <h1>Socks DataBase of Quotes</h1>

    <form @submit.prevent="addMessage" >
      <ul>
        <li>
          <label for="quote">Add Quote: </label>
          <input v-model="quote.Quote" type="text" id='quote' required>
        </li>
        <li>
          <label for="source">Add Source: </label>
          <input v-model="quote.Source" type="text" id='source' required>
        </li>
        <button v-on:click="submit" type="button" class="btn btn-primary btn-lg btn-block">Sumbit Quote</button>
      </ul>
    </form>



  </div>
</template>

<script>
import axios from 'axios';

  // @ is an alias to /src
  const API_URL = 'http://localhost:3000/quotes';

  export default {
    name: 'addQuote',
    data: () => ({
      quotes: {},
      quote:{
        Quote:'',
        Source: '',
      }
    }),
    mounted() {
      axios.get('http://localhost:3000/quotes')
      .then((res)=> {
        (this.quotes = res.data)
        console.log(res)
      }).catch((error) => {
            console.log(error.res);
          })
    },

    methods: {
      submit() {
        axios.post('http://localhost:3000/quotes', this.quote)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error.res);
          });
      },
    },

  };
</script>
<style >
ul li{
  list-style-type: none;
  padding: 10px;
}
li label{
  padding-right: 10px;
}
li input{
  width: 100%;
} 
form{
  width: 95%;
}
</style>
