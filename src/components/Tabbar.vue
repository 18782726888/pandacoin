<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="home">
                <img src="../assets/imgs/home_active.png" slot="icon" v-if="selected=='home'">
                <img src="../assets/imgs/home.png" slot="icon"  v-else>首页
            </mt-tab-item>
            <mt-tab-item id="c2c">
                <img src="../assets/imgs/meiyuan_active.png" slot="icon"  v-if="selected=='c2c'">
                <img src="../assets/imgs/meiyuan.png" slot="icon" v-else>C2C
            </mt-tab-item>
              <mt-tab-item id="heyue">
                <img src="../assets/imgs/hangqing_active.png" slot="icon"  v-if="selected=='heyue'">
                <img src="../assets/imgs/hangqing.png" slot="icon" v-else >合约
            </mt-tab-item>
              <mt-tab-item id="bibi">
            <img src="../assets/imgs/meiyuan_active.png" slot="icon"  v-if="selected=='bibi'">
                <img src="../assets/imgs/meiyuan.png" slot="icon" v-else >币币
            </mt-tab-item>
              <mt-tab-item id="zhanghu">
                <img src="../assets/imgs/user_active.png" slot="icon"  v-if="selected=='zhanghu'">
                <img src="../assets/imgs/user.png" slot="icon" v-else >账户
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    props:['active'],
    data(){
        return {
            selected:this.active
        }
    },
    watch:{
        selected(value){
            if(value == 'home'){
                this.$router.push('/');
                console.log(value)
            } else if(value == 'c2c'){
                this.$router.push('/c2c');
                   console.log(value)
            }else if(value == 'heyue'){
                this.$router.push('/heyue');
                   console.log(value)
            }else if(value == 'bibi'){
                this.$router.push('/bibi');
                   console.log(value)
            }else{
                this.$router.push('/zhanghu');
                   console.log(value)
            }
        }
    }
}
</script>
<style scoped>
.mint-tabbar>.mint-tab-item.is-selected{
    color: #58b926;
}
</style>
    
