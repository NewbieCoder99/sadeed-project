<template>
    <div class="ant-card ant-card-bordered" data-v-21b4b419="">
        <div class="ant-card-head">
            <div class="ant-card-head-wrapper">
                <div class="ant-card-head-title">
                    <slot name="header"></slot>
                </div>
            </div>
        </div>
        <div class="ant-card-body">
            <slot name="body"></slot>
        </div>
        <div class="ant-card-footer" :style="(isBorder == true) ? `border:1px solid #eee;padding-top:25px;padding-bottom:25px;`:``">
            <div class="row">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            isBorder : {
                type : Boolean,
                default : true
            }
        }
    }
</script>