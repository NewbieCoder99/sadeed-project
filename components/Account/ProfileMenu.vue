<template>
	<a-col
		:xs="{ span: 24}"
		:sm="{ span: 24}"
		:md="{ span: 6}"
		:lg="{ span: 6}"
		:xl="{ span: 6}">
		<Card :isBorder="false">
			<template v-slot:header>
				<center>
					<img src="https://ui-avatars.com/api/?background=1F1E2E&color=fff&name=Abdallah+Odat" style="border-radius:100%;width:45%;">
					<div class="v-ant-clearfix"></div>
					<font style="font-size:1em;">
						Abdallah Odat
					</font><br>
					<font style="color:#ccc;">
						odat@sadeed.io
					</font>
				</center>
			</template>
			<template v-slot:body>
				<a-list size="small">
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<OverViewIcon/>
						</span>
						Profile Overview
					</a-list-item>
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<PeopleIcon/>
						</span>
						Update Password
					</a-list-item>
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<RhombusIcon/>
						</span>
						Team Management
					</a-list-item>
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<UserProtectionIcon/>
						</span>
						Billing
					</a-list-item>
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<EnvelopeIcon/>
						</span>
						Support
					</a-list-item>
					<a-list-item id="v-ant-custom-menu">
						<span class="v-ant-widget-icon">
							<CardIcon/>
						</span>
						Logout
					</a-list-item>
				</a-list>
			</template>
		</Card>
	</a-col>
</template>

<script>

	import Card from '@/components/Elements/Card'
	import CardIcon from '@/components/Icons/CardIcon'
	import EnvelopeIcon from '@/components/Icons/EnvelopeIcon'
	import RhombusIcon from '@/components/Icons/RhombusIcon'
	import UserProtectionIcon from '@/components/Icons/UserProtectionIcon'
	import PeopleIcon from '@/components/Icons/PeopleIcon'
	import OverViewIcon from '@/components/Icons/OverViewIcon'

	export default {
		components : {
			Card,
			CardIcon,
			EnvelopeIcon,
			RhombusIcon,
			UserProtectionIcon,
			PeopleIcon,
			OverViewIcon
		}
	}

</script>

<style type="text/css">
	.v-ant-el-profile {
		background:#fff;
	}

	#v-ant-custom-menu {
		vertical-align:middle;
		border:none;
		cursor:pointer;
		padding: 7px 10px 10px 7px;
		/*flex: 1.5;*/
		font-weight: 500
	}

</style>