<template>
    <nav>
        <v-app-bar dark app color="grey darken-4" :clipped-left="$vuetify.breakpoint.smAndUp">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up">
               <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>
                <span>MicroProto</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab depressed small color="grey darken-4" @click="drawer_right = !drawer_right">
                <v-icon>mdi-power</v-icon>
            </v-btn>
        </v-app-bar>
        
        <v-navigation-drawer
         :clipped="$vuetify.breakpoint.smAndUp" 
         :permanent="$vuetify.breakpoint.smAndUp" 
         v-model="drawer" 
         dark 
         app 
         class="grey darken-2" 
         mini-variant 
         :mini-variant-width="80">
            <v-list>
                <v-list-item v-for="link in links_right" :key="link.text" router :to="link.route">
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
            links_leftt: [
                { icon: 'mdi-power', text: 'Power-Off', route: 'poweroffcode'},
                { icon: 'mdi-restart', text: 'Reboot', route: 'rebootcode'},
                { icon: 'mdi-server', text: 'System-Status', route: 'status'}
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