import { LightningElement, track, wire, api } from 'lwc';
import getSomething from '@salesforce/apex/Login.getSomething';
import insertLeadFromSignUp from '@salesforce/apex/insertLeadFromSignUp.insertLeadFromSignUp'
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';


export default class App extends LightningElement {

    //Initialize Variables
    searchStringEmail = '';
    searchStringPassword = '';
    username = '';
    email = '';
    loginemail = 'Anonymous';



    @track page = {
        homePage: true,
        aboutPage: false,
        loginPage:false,
        signupPage:false,
        resetPassPage: false,
        storePage: false,
        supportPage: false
    }


    //Connections to Apex Classes
    @wire(getSomething, {query: '$searchStringEmail', query2: '$searchStringPassword'})
    cons;


    changetoemail(e){
        console.log(e.detail);
        this.loginemail = e.detail;
        
    }
    //Connected to handle button clicks from child
    handlemenu(e)
    {
        switch(e.detail){
            case "Home":
                this.page.homePage=true;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                this.page.storePage=false;
                this.page.supportPage=false;
                break;
            case "About":
                this.page.homePage=false;
                this.page.aboutPage=true;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                this.page.storePage=false;
                this.page.supportPage=false;
                break;
            case "Login":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=true;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                this.page.storePage=false;
                this.page.supportPage=false;
                break;
            case "Signup":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=true;
                this.page.resetPassPage=false;
                this.page.storePage=false;
                this.page.supportPage=false;
                break;
            case "ForgotPassword":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=true;
                this.page.storePage=false;
                this.page.supportPage=false;
                break;
            case "Shop":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                this.page.storePage=true;
                this.page.supportPage=false;
                break;
            case "Support":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                this.page.resetPassPage=false;
                this.page.storePage=false;
                this.page.supportPage=true;
                break;
        }
      if(e.detail.detail == "ActualSignUp")
        {
            
            this.searchStringEmail = e.detail.email;
            this.searchStringPassword = e.detail.password;
            insertLeadFromSignUp({ email: e.detail.email, password: e.detail.password })
            .then((result) => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
            // console.log(e.detail.password);
            // console.log(e.detail.email);
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