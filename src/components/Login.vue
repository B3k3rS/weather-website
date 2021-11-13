<template>
    <div class="authorize">
        <div class="auth_cont">
            <div class="title">
                <h2>Weather website by B3k3r</h2>
            </div>
            <div class="short_info">
                <p>This site will allow you to access the weather from around the world. The site is based on the OpenWeather API. I hope this site will benefit you :D</p>
            </div>    
            <h3 v-if="errorMessage != ''">{{errorMessage}}</h3>        
            <form>                
                <p> Login: <input v-model="loginInput" type="text"></p>
                <p> Password: <input v-model="passwordInput" type="password"></p>
                <div class="button">
                    <button v-on:click="login"><a :href="this.errorMessage == '' ? '/' : '#'">Log in</a></button>
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return{
            loginInput: '',
            passwordInput: '',
            errorMessage: '',
        }
    },
    methods: {
        login: function(){
            if (this.loginInput.trim() != "B3k3r" || this.passwordInput != "12345"){
                this.errorMessage = "Login or password entry error!";
                setTimeout(() => {this.errorMessage = "";},5000);                
            }
            else{
                this.errorMessage = '';
                localStorage.setItem("Login", this.loginInput)

                this.loginInput = ''
                this.passwordInput = ''
            }
        }
    }
}
</script>

<style scoped>
    a{
        color: #fff;
    }
    .authorize{
        margin: 0 auto;
        margin-top: 20vh;
        width: 60%;
        background: rgba(76, 64, 121, 0.6);
        border-radius: 10px;
    }
    .title h2{
        width: 100%;
        border-bottom: 1px solid #fff;
        font-weight: normal;
        font-size: 30px;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }
    .short_info p{
        width: 100%;
        border-bottom: 1px solid #fff;
        font-weight: normal;
        font-size: 14px;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }
    .auth_cont{
        margin: 20px 20px;
        border-bottom: 1px solid #fff;
    }
    .auth_cont form{
        width: 80%;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

    }
    .auth_cont form p {
        font-size: 18px;
    }
    .auth_cont form .button{
        width: 100%;
        text-align: center;
    }
    .auth_cont h3{
        
        color: #fff;
        font-size: 18px;
        text-align: center;
        background: rgba(211, 77, 77,0.6);
        padding: 5px 0;
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
    }
    .button button {
        width: 150px;
        height: 30px;
        border: none;
        margin-top: 10px;
        border-radius: 5px;
        color: #fff;
        background: rgb(83, 182, 79);
    }
</style>