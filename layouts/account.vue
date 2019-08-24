<template>
	<a-layout>
		<a-layout-content>
		    <a-row>
		    	<Nuxt/>
		    </a-row>
		</a-layout-content>
	</a-layout>
</template>

<script>

	export default {
		data() {
			return {
			}
		},
		head() {
			return {
				link: [
					{
						rel : 'stylesheet',
						href : '/css/custom.css'
					}
				]
			}
		},
		created() {
			if (this.$store.state.userSession) {
				return this.$router.push('/');
			}
		},
		components : {
		}
	}
</script>

<style type="text/css">
</style>
