<template>
    <HeaderCard
        :class="active"
        :search="activeSearch"
    />
    <div class="SearchResult">
        <h1>Search Results :</h1>
        <img class="barre" src="@/assets/barre.png"/>
        <div class="results">
            <ResultSample v-for="(n,index) in resultsNB" :key="n"
            :name="elementsFound[index].name"
            :arrayType="elementsFound[index].arrayType"
            :id="elementsFound[index].id"
            :url="elementsFound[index].url"
            />
            <div v-if="!elementsFound[0]">{{state}}
            </div>
        </div>
        <div v-if="elementsFound.length > resultsNBasked" @click="LoadMore" class="navigation">
            <p>Load more...</p>
        </div>
    </div>
    <FooterCard/>
</template>
    
<script>
    import { useRoute } from 'vue-router'
    import HeaderCard from '@/components/BasicSample/Header.vue'
    import FooterCard from '@/components/BasicSample/Footer.vue'
    import ResultSample from '@/components/BasicSample/ResultSample.vue'
    import { getAllElementsByName } from '@/services/api/GetElementByName.js'
    
    export default {
      name: 'SearchPage',
      components: {
          HeaderCard,
          FooterCard,
          ResultSample
      },
      data() {
        return {
            active: "",
            activeSearch: "",
            resultsNBasked: 25,
            elementsFound: [],
            state: "Loading..."
        }
      },
      computed: {
        resultsNB: function() {
            return (this.resultsNBasked > this.elementsFound.length ? this.elementsFound.length : this.resultsNBasked);
        }
    },
      beforeMount() {
        const route = useRoute();
        this.activeSearch = route.params.name;
        this.SearchAllFields(route.params.name);
      },
      beforeRouteUpdate(to, from) {
        if (to.params.name != from.params.name)
        {
            this.resultsNBasked = 25;
            this.elementsFound = [];
            this.state = "Loading...";
            this.activeSearch = to.params.name;
            this.SearchAllFields(to.params.name);
        }
      },
      methods: {
        async SearchAllFields(name) {
            this.elementsFound = await getAllElementsByName(name);
            if (this.elementsFound.length == 0)
                this.state = "Nothing found for "+name;
            },
            LoadMore() {
                this.resultsNBasked += 25;
            }
        }
    }
    
</script>

<style scoped> 
    h1 {
        margin-bottom: 0;
    }

    .SearchResult {
        margin-left: 10vw;
    }

    .results {
        margin-top: 1vw;
    }
    
    .barre {
        display: inline;
        width: 20vw;
        margin: auto;
    }

    .navigation p {
        margin-top: 2vh;
        cursor: pointer;
        border: #694B44 5px double;
        width: 20vw;
        padding-left: 0.5em;
    }

</style>