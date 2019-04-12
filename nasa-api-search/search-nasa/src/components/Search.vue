<template>
    <div class="search">
        <h1>Search NASA Images</h1>
        <form v-on:submit.prevent="getSearch(userInput)">
        <input type="text" placeholder="Search NASA" v-model="userInput" />
        </form>
    
        <div v-if="results">
            <div v-for="result in results">
                                <h3> {{result.data[0].title}} </h3>

                <img v-bind:src="result.links[0].href"/>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'search',
    data() {
        return{
            userInput: '',
            results: ''
        }
    }, 
    methods: {
        getSearch(userInput){
        axios.get(process.env.VUE_APP_REMOTE_API + userInput + '&media_type=image').then(response => {
            this.results = response.data.collection.items;
            //this.results.slice(0,10);
            console.log(response);
            console.log(this.results);
        });
        }
    }  
}
</script>

<style>

</style>

