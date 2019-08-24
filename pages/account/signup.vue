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
				style="top:10%;">
					<center>
						<h1 class="v-ant-signin-text">
							Register New Account
						</h1>
						<p style="color:#717171;">
							You're starting a 14-day free trial for sadeed
						</p>
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

									<a-row :gutter="16">

										<a-col
											:xs="{ span: 12 }"
											:sm="{ span: 12 }"
											:md="{ span: 12 }"
											:lg="{ span: 12 }"
											:xl="{ span: 12 }"
											:gutter="16">
											<a-input
												class="v-ant-form-input"
												placeholder="First Name">
											</a-input>
										</a-col>

										<a-col
											:xs="{ span: 12 }"
											:sm="{ span: 12 }"
											:md="{ span: 12 }"
											:lg="{ span: 12 }"
											:xl="{ span: 12 }">
											<a-input
												class="v-ant-form-input"
												placeholder="Username">
											</a-input>
										</a-col>

										<a-col
											:xs="{ span: 24 }"
											:sm="{ span: 24 }"
											:md="{ span: 24 }"
											:lg="{ span: 24 }"
											:xl="{ span: 24 }"
											:gutter="16">
											<div class="v-ant-clearfix"></div>
									  		<a-input
										  		class="v-ant-form-input"
										  		placeholder="Email Address">
									  		</a-input>
										</a-col>

										<a-col
											:xs="{ span: 24 }"
											:sm="{ span: 24 }"
											:md="{ span: 24 }"
											:lg="{ span: 24 }"
											:xl="{ span: 24 }"
											:gutter="16">
											<div class="v-ant-clearfix"></div>
									  		<a-input
										  		class="v-ant-form-input"
										  		placeholder="Password">
									  		</a-input>
										</a-col>

										<a-col
											:xs="{ span: 24 }"
											:sm="{ span: 24 }"
											:md="{ span: 24 }"
											:lg="{ span: 24 }"
											:xl="{ span: 24 }"
											:gutter="16">
											<div class="v-ant-clearfix"></div>
									  		<a-input
										  		class="v-ant-form-input"
										  		placeholder="Confirm Password">
									  		</a-input>
										</a-col>

										<a-col
											:xs="{ span: 24 }"
											:sm="{ span: 24 }"
											:md="{ span: 24 }"
											:lg="{ span: 24 }"
											:xl="{ span: 24 }"
											:gutter="16">
											<div class="v-ant-clearfix"></div>
											<a href="javascript:void(0)" style="color:#717171;">
												<small>
												By clicking Sign up you agree on {{ appName }}'s
												<br>
												<b>Terms & Conditions</b>
												</small>
											</a>
										</a-col>

									</a-row>

									<div class="v-ant-clearfix"></div>

									<a-form-item>
										<a-button type="primary">
											Sign Up
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
									Already have an account? <nuxt-link to="/account/signin" style="color:#717171;"><b>Login</b></nuxt-link>
								</p>

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
		data() {
			return {
				appName : process.env.appName,
			}
		},
		head() {
			return {
				title: 'Sign Up',
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