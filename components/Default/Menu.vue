<template>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="$router.push('/')">
            <a-icon type="home"></a-icon>
            <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="2">
            <a-icon type="inbox"></a-icon>
            <span>Inbox</span>
        </a-menu-item>
        <a-menu-item key="3">
            <a-icon type="sync"></a-icon>
            <span>Automate</span>
        </a-menu-item>
        <a-menu-item key="4" @click="$router.push('/my-account')">
            <a-icon type="user"></a-icon>
            <span>Account</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>
