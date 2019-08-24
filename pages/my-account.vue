<template>
	<div>
		<a-row>
			<a-col
				:xs="{ span: 24}"
				:sm="{ span: 24}"
				:md="{ span: 24}"
				:lg="{ span: 24}"
				:xl="{ span: 24}">
				<h3>Account</h3>
				<div class="v-ant-clearfix"></div>
				<div class="v-ant-clearfix"></div>
			</a-col>
		</a-row>

		<a-row :gutter="12">
			<ProfileMenu/>
			<a-col
				:xs="{ span: 24}"
				:sm="{ span: 24}"
				:md="{ span: 18}"
				:lg="{ span: 18}"
				:xl="{ span: 18}">
				<Card :isBorder="true">
					<template v-slot:header>
						<h3 id="v-ant-head-title">
							Change Password
							<small>
								change or reset your account password
							</small>
						</h3>
					</template>
					<template v-slot:body>
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
						</a-form>
					</template>
					<template v-slot:footer>
						<div class="v-ant-clearfix"></div>
						<div class="col-lg-3 col-xl-3">
						</div>
						<div class="col-lg-9 col-xl-9">
						    <button type="reset" class="btn btn-warning">
						    	Change Password
						    </button>&nbsp;
						    <button type="reset" class="btn btn-secondary">Cancel</button>
						</div>
					</template>
				</Card>
			</a-col>
		</a-row>
	</div>
</template>

<script>

	import ProfileMenu from '@/components/Account/ProfileMenu'
	import Card from '@/components/Elements/Card'

	export default {
		components : {
			ProfileMenu,
			Card
		}
	}

</script>

<style type="text/css">
	#v-ant-head-title {
		margin: 0;
		font-size: 1.2rem;
		font-weight: 500;
		color: #48465b;
	}
	#v-ant-head-title small {
		font-weight: 300;
		padding-left: .5rem;
		font-size: 1rem;
		color: #74788d;
	}
</style>