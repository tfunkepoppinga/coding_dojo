<template>
    <v-app>
        <v-navigation-drawer permanent dark app>
            <v-list-item v-for="(navItem, index) in navItems" :key="index" :to="navItem.path">
                <v-list-item-content>
                    <v-list-item-title class="title">
                        {{ navItem.name }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import {routes} from './plugins/router'

export default {
    name: 'App',

    components: {
    },
    data() {
        return {
            navItems: routes
        }
    }
};
</script>
