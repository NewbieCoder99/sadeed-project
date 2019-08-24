<template>
  	<a-col
  		:xs="{ span: 24}"
  		:sm="{ span: 24}"
  		:md="{ span: 9}"
  		:lg="{ span: 9}"
  		:xl="{ span: 9}"
  		class="v-ant-left">
      		<a-col
	      		:xs="{ span: 24}"
	      		:sm="{ span: 24}"
	      		:md="{ span: 24}"
	      		:lg="{ span: 24}"
	      		:xl="{ span: 24}">
      			<br>
      			<img src="/images/Logo.svg" class="v-ant-logo" style="width:175px;">
      		</a-col>
      		<a-col
  				:xs="{ span: 24}"
  				:sm="{ span: 24}"
  				:md="{ span: 24}"
  				:lg="{ span: 24}"
  				:xl="{ span: 24}"
      			style="top:32%;">
      			<h1 class="v-ant-welcome-text">
      				<b>WELCOME TO SADEED</b>
      			</h1>
      			<h2 class="v-ant-child-welcome-text">
      				Where you can create your own social media bots
      			</h2>
      		</a-col>
      		<a-col
  				:xs="{ span: 16}"
  				:sm="{ span: 16}"
  				:md="{ span: 16}"
  				:lg="{ span: 16}"
  				:xl="{ span: 16}"
      			style="top:60%;">
      			<font style="color:#717171;margin-left:30px;float:left;">
      				&#9400; 2019 {{ appName }}
      			</font>
      		</a-col>
      		<a-col
  				:xs="{ span: 4}"
  				:sm="{ span: 4}"
  				:md="{ span: 4}"
  				:lg="{ span: 4}"
  				:xl="{ span: 4}"
      			style="top:60%;color:#717171">
      			Privacy
      		</a-col>
      		<a-col
  				:xs="{ span: 4}"
  				:sm="{ span: 4}"
  				:md="{ span: 4}"
  				:lg="{ span: 4}"
  				:xl="{ span: 4}"
      			style="top:60%;color:#717171">
      			Contact
      		</a-col>
  	</a-col>
</template>

<script>
	export default {
		data() {
			return {
				appName : process.env.appName,
			}
		}
	}
</script>

<style type="text/css">
</style>
