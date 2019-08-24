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
				<h1 style="color:#717171;">We've Send You a Confirmation Email</h1>
				<h3 style="color:#717171;">
					Time to check your email odat@sadeed.io
				</h3>
				<img src="/images/email.svg" style="width:13%;">
				<div style="padding-bottom:25px;"></div>
				<h3 style="color:#717171;">
					Click the link in your email to confirm your account<br>
					If you can not find the email check your spam folder or click the link below to resend
				</h3>
				<br>
				<a-button type="primary">
					Resend Email
				</a-button>
			</center>
	</a-col>
</template>

<script>
	export default {
		layout : 'account',
		head() {
			return {
				title: 'Verify Email',
			}
		}
	}
</script>

<style type="text/css">
</style>