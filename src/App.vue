<template>
   <v-app>
       <v-navigation-drawer permanent>
           <v-list-item link to="/Index">
               <v-list-item-content>
                   <v-list-item-title class="title">
                       Index
                   </v-list-item-title>
                   <v-list-item-subtitle>
                       Stuff
                   </v-list-item-subtitle>
               </v-list-item-content>
           </v-list-item>
           <v-list-item link to="/About">
               <v-list-item-content>
                   <v-list-item-title class="title">
                       About
                   </v-list-item-title>
                   <v-list-item-subtitle>
                       Other Stuff
                   </v-list-item-subtitle>
               </v-list-item-content>
           </v-list-item>
       </v-navigation-drawer>
   </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {
    },
    data() {
        return {
        }
    }
};
</script>
