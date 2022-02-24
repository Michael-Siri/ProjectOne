import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {



    @track page = {
        homePage: true,
        aboutPage: false,
        loginPage:false,
        signupPage:false,
        resetPassPage: false
    }

    handlemenu(e)
    {
        switch(e.detail){
            case "Home":
                this.page.homePage=true;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                break;
            case "About":
                this.page.homePage=false;
                this.page.aboutPage=true;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                break;
            case "Login":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=true;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                break;
            case "Signup":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=true;
                this.page.resetPassPage=false;
                break;
            case "ForgotPassword":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=true;
                break;
        }

    }

    //David
    //If the token is set in the URL
    //it will display the reset password page form directly
    connectedCallback() {
        if(window.location.href.includes("token")){
            this.page.homePage=false;
            this.page.resetPassPage=true;

        }
    }

}