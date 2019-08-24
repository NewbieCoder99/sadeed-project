<template>
	<div>
		<Side/>
		<a-col
			:xs="{ span: 24}"
			:sm="{ span: 24}"
			:md="{ span: 15}"
			:lg="{ span: 15}"
			:xl="{ span: 15}"
			class="v-ant-right">
			<a-col
				:xs="{ span: 24}"
				:sm="{ span: 24}"
				:md="{ span: 24}"
				:lg="{ span: 24}"
				:xl="{ span: 24}"
				style="top:20%;">
					<center>
						<h1 class="v-ant-signin-text">
							Sign In
						</h1>
						<a-row>
							<a-col
								:xs="{ span: 20, offset: 2}"
								:sm="{ span: 20, offset: 2}"
								:md="{ span: 10, offset: 7}"
								:lg="{ span: 10, offset: 7}"
								:xl="{ span: 10, offset: 7}">
								<a-form
									id="components-form-demo-normal-login"
									class="login-form">

							  		<a-input
							  			class="v-ant-form-input"
							  			placeholder="Username">
							  		</a-input>

								  	<div class="v-ant-clearfix"></div>

							  		<a-input
								  		class="v-ant-form-input"
								  		placeholder="Password">
							  		</a-input>

								  	<div class="v-ant-clearfix"></div>

									<a-checkbox
										class="v-ant-remember-text">
										Remember Me
									</a-checkbox>
									<nuxt-link
										to="/account/forgot-password" class="v-ant-forget-text">
										Forgot Password?
									</nuxt-link>

									<div class="v-ant-clearfix"></div>
									<div class="v-ant-clearfix"></div>
									<div class="v-ant-clearfix"></div>

									<a-form-item>
										<a-button type="primary">
											Sign In
										</a-button>
									</a-form-item>

								</a-form>

								<div class="v-ant-login-divider">
									<div class="v-ant-divider">
										<span></span>
										<span>OR</span>
										<span></span>
									</div>
								</div>

								<div class="v-ant-clearfix"></div>

								<p style="color:#717171;">
									Dont have an account?
								</p>

								<a-form-item>
									<a-button type="primary" @click="$router.push('/account/signup')">
										Sign Up
									</a-button>
								</a-form-item>

							</a-col>
						</a-row>
					</center>
			</a-col>
		</a-col>
	</div>
</template>

<script>

	import Side from '@/components/Account/Side'

	export default {
		layout : 'account',
		head() {
			return {
				title: 'Sign In',
			}
		},
		components : {
			Side
		}
	}
</script>

<style type="text/css">
	.v-ant-form-input {
		border:none;
		outline: none;
		background-color:#eee;
		font-family:sans-serif, "Poppins";
	}
</style>