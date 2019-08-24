<template>
    <div>
        <a-menu
            mode="horizontal"
            style="lineHeight:61px;float:right;">

                <a-menu-item key="1">
                    <span class="kt-header__topbar-icon kt-pulse kt-pulse--brand">
                        <RhombusIcon/>
                    </span>
                </a-menu-item>

                <a-sub-menu key="2">
                    <span slot="title">
                        <span>
                            <img src="/images/usa.svg" style="width:25px;height:20px;border-radius:3px;">
                        </span>
                    </span>
                    <a-menu-item key="3">
                        Dropdown 1
                    </a-menu-item>
                </a-sub-menu>

                <a-menu-item key="4">
                    <small>
                        <font style="color:#717171;">
                            Hi, <b>{{ appName }}</b>
                        </font>
                    </small>
                    <img src="https://ui-avatars.com/api/?background=1F1E2E&color=fff&name=Abdallah+Odat" style="width:30px;">
                </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
    import RhombusIcon from '@/components/Icons/RhombusIcon'
    export default {
        data() {
            return {
                appName : process.env.appName,
            }
        },
        components : {
            RhombusIcon
        }
    }
</script>
