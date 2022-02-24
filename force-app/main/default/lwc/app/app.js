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
    loginemail = 'michaelksbookdesign@gmail.com';

    //Responsive Variables/Objectf
    @track page = {
        homePage: true,
        aboutPage: false,
        loginPage:false,
        signupPage:false
    }

    //Connections to Apex Classes
    @wire(getSomething, {query: '$searchStringEmail', query2: '$searchStringPassword'})
    cons;

    //Connected to handle button clicks from child
    handlemenu(e)
    {
        switch(e.detail){
            case "Home":
                this.page.homePage=true;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=false;
                break;
            case "About":
                this.page.homePage=false;
                this.page.aboutPage=true;
                this.page.loginPage=false;
                this.page.signupPage=false;
                break;
            case "Login":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=true;
                this.page.signupPage=false;
                break;
            case "Signup":
                this.page.homePage=false;
                this.page.aboutPage=false;
                this.page.loginPage=false;
                this.page.signupPage=true;
                break;


        }
        //When Recieving an object through custom events
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

}
