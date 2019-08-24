<template>
	<a-col
		:xs="{ span: 24}"
		:sm="{ span: 24}"
		:md="{ span: 24}"
		:lg="{ span: 24}"
		:xl="{ span: 24}"
		style="height:100vh;">
			<center>
				<div style="padding-bottom:80px;"></div>
				<h1 style="color:#717171;">
					Email Address Verified
				</h1>
				<img src="/images/email2.svg" style="width:13%;">
				<div style="padding-bottom:25px;"></div>
				<h3 style="color:#717171;">
					You've successfully verified your email, you can now go to your<br>
					dashboard by clicking below
				</h3>
				<br>
				<a-button type="primary" @click="$router.push('/')">
					Get Started
				</a-button>
			</center>
	</a-col>
</template>

<script>
	export default {
		layout : 'account',
		head() {
			return {
				title: 'Verified Email',
			}
		}
	}
</script>

<style type="text/css">
</style>