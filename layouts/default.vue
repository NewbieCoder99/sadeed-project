<template>
	<a-layout id="components-layout-demo-custom-trigger">

		<!-- a-layout-sider -->
		<a-layout-sider
			:trigger="null"
			collapsible
			v-model="menus.collapsed">

				<div class="v-ant-clearfix"></div>
				<div class="v-ant-clearfix"></div>

				<nuxt-link to="/">
					<img src="/images/Logo.svg" class="v-ant-dashboard-logo">
				</nuxt-link>

				<a-icon
				  class="trigger"
				  style="float:right;color:#fff;"
				  :type="menus.collapsed ? 'right' : 'left'"
				  @click="()=> menus.collapsed = ! menus.collapsed"/>

				<div class="v-ant-clearfix"></div>
				<div class="v-ant-clearfix"></div>

				<Menu/>
		</a-layout-sider>
		<!-- ./ a-layout-sider -->

		<!-- a-layout -->
		<a-layout>

			<a-layout-header
				class="v-ant-header-layout">
				<Header/>
			</a-layout-header>

			<!-- a-layout-content -->
			<a-layout-content
				:style="{ margin: '16px', padding: '10px', minHeight: '100vh' }">
			  <Nuxt/>
			</a-layout-content>
			<!-- ./ a-layout-content -->

			<!-- a-layout-footer -->
			<a-layout-footer class="v-ant-footer-layout">
				<small>
					2019 &copy; {{ appName }}
				</small>
			</a-layout-footer>
			<!-- ./ a-layout-footer -->

		</a-layout>
		<!-- ./ a-layout -->

	</a-layout>
</template>

<script>

	import Menu from '@/components/Default/Menu'
	import Header from '@/components/Default/Header'

	export default {
		data() {
			return {
				appName : process.env.appName,
				menus : {
					collapsed: false
				}
			}
		},
		head() {
			return {
				link: [
					{
						rel : 'stylesheet',
						href : '/css/theme.css'
					},
					{
						rel : 'stylesheet',
						href : '/css/custom.css'
					},
				]
			}
		},
		created() {
			// if (!this.$store.state.userSession) {
			// 	return this.$router.push('/account/signin');
			// }
		},
		components : {
			Menu,
			Header
		}
	}
</script>

<style type="text/css">

	#components-layout-demo-custom-trigger .trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color .3s;
	}

	#components-layout-demo-custom-trigger .trigger:hover {
		color: #1890ff;
	}

	#components-layout-demo-custom-trigger .logo {
		height: 32px;
		background: rgba(255,255,255,.2);
		margin: 16px;
	}

	.v-ant-header-layout {
		background-color: #fff;
		padding: 0
	}

	.v-ant-footer-layout {
		background-color: #fff;
		color:#717171;
	}

	.v-ant-dashboard-logo {
		width:100px;
		margin-left:10px;
		cursor:pointer;
		margin-top:20px;
		float:left;
	}

</style>
