import { LightningElement,track } from 'lwc';

//import {getRecord} from 'lighting/uiRecordApi';
import GetSupportForm from '@salesforce/apex/SupportForm.GetSupportForm'; //gets method from apex "SupportForm"

export default class SupportPage extends LightningElement {

    //our variables with @track so that they play with apex
    @track name; 
    @track email;
    @track phone;
    @track subject;
    @track description;

    //Our errors
    contacts; 
    error; 


    clickedsubmit(e){
        let inp = this.template.querySelectorAll("input"); //creates a new input, selects all things input does 
console.log(inp); 
inp.forEach(function(element){

            if(element.name == "name")
                this.name=element.value;

                else if(element.name == "email")
                this.email=element.value;

                else if(element.name == "phone")
                this.phone=element.value;

                else if(element.name == "subject")
                this.subject=element.value;

        },this);

        //Console.log confirm 
        //console.log(this.name); 
        //console.log(this.email); 
        //console.log(this.phone); 
        //console.log(this.subject); 

        //Insert things via Apex, sends in variables, otherwise errors 
        GetSupportForm({name: this.name, email: this.email, phone: this.phone, subject: this.subject})
            .then((result) => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });


    }


}