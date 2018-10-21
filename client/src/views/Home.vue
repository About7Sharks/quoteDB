<template>
    <div>
        <h1>People say some pretty cool things!</h1>
        <br>
        <p>So I started to record the quotes that I liked. But your boy is extra so im gonna stop using apple
            notes and make my own MongoDB to store some quotes. Feel free to add quotes of your own.</p>
       
       <br>
        <ul id="quote">
            <li v-for="quote in quotes">
                <div class="row">
                <h4 class="col-4"> {{quote.Source}}</h4> 
                 <p class="col">{{quote.Quote}}</p>  
             </div>
                
            </li>
        </ul>
</div>

</template>
<script>
    import axios from 'axios';
    const API_URL = 'http://localhost:3000/quotes';

    export default {
        data() {
            return {
                quotes: {}
            }
        },
        mounted() {
            axios.get('http://localhost:3000/quotes')
                .then((res) => {
                    (this.quotes = res.data)
                    console.log(res)
                }).catch((error) => {
                    console.log(error.res);
                })
        },
    }
</script>

