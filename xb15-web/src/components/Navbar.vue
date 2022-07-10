<template>
    <nav>
        <v-app-bar dark app color="grey darken-4" :clipped="$vuetify.breakpoint.smAndUp">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up">
               <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <span>MicroProto</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab depressed small color="grey darken-4">
                <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
            <v-btn fab depressed small color="grey darken-4" @click="drawer_right = !drawer_right">
                <v-icon>mdi-power</v-icon>
            </v-btn>
        </v-app-bar>
        
        <v-navigation-drawer
         :permanent="$vuetify.breakpoint.smAndUp" 
         v-model="drawer" 
         dark 
         app 
         class="grey darken-2" 
         mini-variant 
         :mini-variant-width="60">
         
            <v-list>
                <v-img src="@/assets/Logo_color.png" height="56.2"></v-img>
                <v-list-item v-for="link in links_left" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="drawer_right" dark temporary right app class="grey darken-2">
            <v-list>
                <v-list-item v-for="link in links_right" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            drawer_right:false,
            links_left: [
                { icon: 'mdi-home', text: 'Home', route: '/'},
                { icon: 'mdi-lightbulb-on', text: 'Ears', route: 'ears'},
                { icon: 'mdi-fan', text: 'Fan', route: 'fan'},
                { icon: 'mdi-cog', text: 'Settings', route: 'settings'},
                { icon: 'mdi-download', text: 'Updates', route: 'update'}
            ],
            links_right: [
                { icon: 'mdi-power', text: 'Power-Off', route: 'poweroffcode'},
                { icon: 'mdi-restart', text: 'Reboot', route: 'rebootcode'},
                { icon: 'mdi-server', text: 'System-Status', route: 'status'}
            ]
        }
    }
}
</script>