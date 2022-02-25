/***************************************
 * Written by: Whitney and David
 * Describtion: This is the class that provides functioniality to our form
 * also connects to our apex classes
 **************************************/




import { LightningElement, track, wire } from 'lwc';
// Importing our apex classes
import resetPassword from '@salesforce/apex/ForgotPassword.resetPassword';
import setPassword from '@salesforce/apex/UpdatePassword.setPassword';


export default class Forgotpass extends LightningElement {

    //variables we wanna track
    @track email;
    @track result;
    password;
    repeatpassword;
    token;

    //We use these to switch between forms/toasts
    form=true;
    resultcheck=false;
    resetpass=false;

    //when this component is called
    //it will check if it has token in the url
    //if it does, it will display the reset password form
    connectedCallback() {
        if(window.location.href.includes("token")){
            this.resetpassword();
            this.token = window.location.href.split('=')[1];
            console.log(this.token);
        }
    }
    




    //this event handles ALL changes to both forms
    handleClick(event){

        event.preventDefault(); //stops page from refreshing, we dont want it to go back to home page
        //IF statements check the name of what triggered the event
        //and does specific stuff depending on what triggered it
        if(event.target.name == 'email'){
            this.email = event.target.value; //save the value of email
        }

        //when form is submitted, pass it through to the ForgotPassword apex class to send email
        if(event.target.name == 'form'){
            resetPassword({searchString: this.email })
                .then(result => {
                    this.result = result;
                    console.log(this.result);
                    this.emailsent();

                })
                .catch(error => {
                    this.result = 'Email does not exist'; //message to show if apex class erros
                    //purposely didnt use try catch because we WANT it to error if the email doesnt exist
                    console.log(this.result.body);
                    this.failure();
                });
        }



        //store password values
        if(event.target.name == 'password'){
            this.password = event.target.value;
        }
        if(event.target.name == 'repeatpassword'){
            this.repeatpassword = event.target.value;
        }

        //this will be triggered when the user submits their new passwords
        if(event.target.name == 'reset'){
            if(this.password == this.repeatpassword){ //check if the 2 passwords match

                //call this apex method to update password
                setPassword({newPassword: this.password, token: this.token }) 
                .then(result => {
                    this.result = result;
                    console.log(this.result);
                    this.emailsent();

                })
                .catch(error => {
                    this.result = error; //error to show
                    console.log(this.result.body);
                    this.failure();
                });

            }else{
                this.result = "Passwords do not match";
                this.failureP();
            }
        }



    }

    //functions to control what is shown
    emailsent(){
        this.form=false;
        this.resultcheck=true;
        this.resetpass=false;
    }
    failure(){
        this.form=true;
        this.resultcheck=true;
        this.resetpass=false;
    }
    failureP(){
        this.form=false;
        this.resultcheck=true;
        this.resetpass=true;
    }
    resetpassword(){
        this.form=false;
        this.resultcheck=false;
        this.resetpass=true;
    }


}