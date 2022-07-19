<template>
	<div>
        <v-col col-auto class="my-4 align-item-center">
           <router-link to="/"><div><v-btn><v-icon>mdi-arrow-left</v-icon>گەڕانەوە</v-btn></div></router-link> 
        </v-col>
			
		<v-row style="text-align: center;">

			<v-col col-auto class="my-9 align-item-center"  v-for="(item,index) in animals" :key="index">
				<v-btn height="332">
					<v-img :src='item.image' max-height="300" max-width="300" @click.prevent="playSound(item.sound)"><div class="text-h5" style="position:absolute; bottom:0px; background: rgba(0, 0, 0, 0.3); width:100%; color:white">
								{{item.name}}
							</div></v-img>
				</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'animals',
			]),
		},
		methods: {
			playSound(sound) {
				if (sound) {
					var audio = new Audio(sound);
					audio.play();
				}
			}

		}
	}
</script>
