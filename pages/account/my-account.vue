<template>
	<a-row :gutter="50">
		<ProfileMenu/>
		<a-col
			:xs="{ span: 24}"
			:sm="{ span: 24}"
			:md="{ span: 17}"
			:lg="{ span: 17}"
			:xl="{ span: 17}"
			class="v-ant-el-form-profile">
			<a-row>
				<a-col
					:xs="{ span: 24}"
					:sm="{ span: 24}"
					:md="{ span: 24}"
					:lg="{ span: 24}"
					:xl="{ span: 24}"
					style="border-bottom:1px solid #eee;">
						<div class="v-ant-clearfix"></div>
						<div class="v-ant-clearfix"></div>
						<font style="font-size:1.4em;">
							Change Password
						</font>
						<font style="color:#717171;">
							change or reset your account password
						</font>
						<div class="v-ant-clearfix"></div>
				</a-col>
				<a-form>
					<a-col
						:xs="{ span: 24}"
						:sm="{ span: 24}"
						:md="{ span: 24, offset: 3}"
						:lg="{ span: 24, offset: 3}"
						:xl="{ span: 24, offset: 3}">
						<div class="v-ant-clearfix"></div>
						<a-form-item
							label="Current Password"
							:label-col="{ span: 5 }"
							:wrapper-col="{ span: 12 }">
							<a-input placeholder="Current Password"/>
						</a-form-item>
						<a-form-item
							label="New Password"
							:label-col="{ span: 5 }"
							:wrapper-col="{ span: 12 }">
							<a-input placeholder="New Password"/>
						</a-form-item>
						<a-form-item
							label="Verify Password"
							:label-col="{ span: 5 }"
							:wrapper-col="{ span: 12 }">
							<a-input placeholder="Verify Password"/>
						</a-form-item>
					</a-col>

					<a-col
						:xs="{ span: 24}"
						:sm="{ span: 24}"
						:md="{ span: 24}"
						:lg="{ span: 24}"
						:xl="{ span: 24}"
						style="border-top:1px solid #eee;">
						<div class="v-ant-clearfix"></div>
						<div class="v-ant-clearfix"></div>
						<center>
							<a-button style="background-color:#F9B604;">
								Change Password
							</a-button>
							<a-button>
								Cancel
							</a-button>
						</center>
						<div class="v-ant-clearfix"></div>
						<div class="v-ant-clearfix"></div>
					</a-col>

				</a-form>
			</a-row>
		</a-col>
	</a-row>
</template>

<script>

	import ProfileMenu from '@/components/Account/ProfileMenu'

	export default {
		components : {
			ProfileMenu
		}
	}

</script>

<style type="text/css">
	.v-ant-el-form-profile {
		background:#fff;
		border:3px solid #eee;
	}
</style>