<template>
    <div>
    <div class="intro">
        <div class="bg_video_block">
            <video class="bg_video" src="/img/bg.mp4" autoplay muted loop></video>
        </div> 
    </div>  

    <img v-on:click="volumeToggle" class="volume-button" v-if="volume_muted" src="/img/volume.png" alt="">
    <img v-on:click="volumeToggle" class="volume-button" v-if="!volume_muted" src="/img/mute.png" alt="">

    <div class="content">
        <login v-if="logined == null"> </login>
    </div>


    <div v-if="logined != null" class="content">
        <router-view></router-view>
    </div>

    <div class="exit_button" v-if="logined != null">
        <a href="/">
            <button v-on:click="logOut"> <img src="/img/exit.png"> Exit</button>
        </a>
    </div>

    </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'



export default {    
    data: function() {
        return {
           API_KEY: '9928019ae35559d6d2cc2bf478ceead0',
           link: "http://api.openweathermap.org/data/2.5/weather?q=",
           volume_muted: true,
           logined: localStorage.getItem('Login'),
        }
    },
    mounted: function(){ 
        
    },
    methods: {        
        volumeToggle: function() {
            var bg = document.querySelector('.bg_video_block video');

            if (this.volume_muted){
                this.volume_muted = false
                bg.muted = 0;
                bg.volume = 0.03;
            }
            else{                
                this.volume_muted = true
                bg.muted = 1;
            }
        },
        logOut: function(){
            localStorage.clear();
        }
    },
    
}
</script>

<style scoped>
    /*----------bg----------*/
    .bg_video_block{
        position: relative;
        padding-bottom: 56.25%;
        width: 100%;
    }    
    .bg_video{
        width: 100%;
        height: auto;
        position: fixed;
        top: 0;
        left: 0;
    } 
    .intro{
        max-height: 100vh;
        overflow: hidden;
        z-index: 1;
    }
    .intro::after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.4);

        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .volume-button{
        position: fixed;
        width: 30px;
        height: 30px;
        top: 10px;
        left: 10px;
        z-index: 3;
    }
    .volume-button:hover{
        cursor: pointer;
    }

    .exit_button{
        position: fixed;
        right: 10px;
        bottom: 10px;
        z-index: 3;
    }
    .exit_button img{
        width: 20px;
        height: 20px;
    }
    .exit_button button{
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        text-transform: uppercase;
        color: #fff;
        width: 120px;
        border:none;
        border-radius: 10px;
        background: rgb(211, 77, 77);
        padding: 5px 20px;
    }

    .exit_button button:hover{
        cursor: pointer;
    }

    /*----------Content----------*/
    .content{
        position: absolute;
        top: 0;
        left:  15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        width: 70%;
        margin: 0 auto;
        z-index: 3;
    }

    .block_name{
        z-index: 3;
        margin: 2%;
        width: 100%;
        font-size: 26px;
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #fff;
    }
    /*----------SettingStatic----------*/
    .setting_static{
        z-index: 3;
        margin: 10px 2%;
        width: 100%;
        display: Flex;
    }

    .add_city, .delete_city{
        text-align: center;
        width: 50%;
    }

    .add_city select, .delete_city select{
        width: 300px;
        padding: 5px 1px;
    }

    .add_city button, .delete_city button{
        width: 150px;
        height: 30px;
        border: 0px;
        color: #fff;
        font-weight: bold;
    }

    .add_city button{
        background: rgb(83, 182, 79);
    }

    .delete_city button{
        background: rgb(211, 77, 77)
    }

    

    /*----------CardInfo----------*/
    .weatherBlock{
        z-index: 3;
        display: block;
        background: rgba(76, 64, 121, 0.8);
        flex-wrap: wrap;
        width: 400px;
        border-radius: 10px;
        margin: 10px auto;
    }
    .weatherBlock h2{
        text-align: center;
        font-weight: normal;
        font-size: 26px;
        padding: 0;
        margin: 0;
    }
    .weatherBlock table{
        width: 100%;
        text-align: center;
        padding: 20px;
        padding-top: 0;
    }
    .weatherBlock table th,td{
        font-weight: normal;
        border-bottom: 1px solid #fff;
    }
    .weatherBlock table img{
        width: 25px;
        height: 25px;
    } 
</style>