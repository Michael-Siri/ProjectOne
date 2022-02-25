import { LightningElement,track } from 'lwc';

//import {getRecord} from 'lighting/uiRecordApi';
import GetSupportForm from '@salesforce/apex/SupportForm.GetSupportForm'; //gets method from apex "SupportForm"
/*
//Importing Objects
import CASE_OBJECT from '@salesforce/schema/Case';
import CONTACTID_FIELD from '@salesforce/schema/ContactId';
import CONTACTEMAIL_FIELD from '@salesforce/schema/ContactEmail';
import CONTACTPHONE_FIELD from '@salesforce/schema/ContactPhone';
import SUBJECT_FIELD from '@salesforce/schema/Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Description';
*/
//import caseRecMethod from '@salesforce/apex/CaseRecHelper.caseRecMethod'; // Gets the Apex method

//import { ShowToastEvent } from 'lightning/platformShowToastEvent'; //This is the fancy thing that happens when we win 

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


    /*
    //This is the "Case" record
    recCase = {

        Name : this.name,
        Email : this.email,
        Phone : this.phone,
        Subject : this.subject,
        Description: this.description
    }
    */
/*
    handelNamechange(event){
        this.recCase.Name = event.target.value;
        //console.log("name",this.recCase.Name);
    }
    handleEmailChange(event){
        this.recCase.Email = event.target.value;
        //console.log("name",this.recCase.Name);
    }
    handlePhoneChange(event){
        this.recCase.Phone = event.target.value;
        //console.log("name",this.recCase.Name);
    }
    handleSubjectChange(event){
        this.recCase.Subject = event.target.value;
        //console.log("name",this.recCase.Name);
    }
    handleDescriptionChange(event){
        this.recCase.Description = event.target.value;
        //console.log("name",this.recCase.Name);
    }

    createCaseRec() {
        debugger;
        caseRecMethod({ caseRec : this.recCase })
            .then(result => {
                this.message = result;
                this.error = undefined;
                if(this.message !== undefined) {
                    this.recCase.Name = '';
                    this.recCase.Email = '';
                    this.recCase.Phone = '';
                    this.recCase.Subject = '';
                    this.recCase.Description = '';
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Case created',
                            variant: 'success',
                        }),
                    );
                }
                
                console.log(JSON.stringify(result));
                console.log("result", this.message);
            })
            .catch(error => {
                this.message = undefined;
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
                console.log("error", JSON.stringify(this.error));
            });
    }
*/

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


        /*
        caseObject = CASE_OBJECT; //setting variable to "Case" object
  
        myFields = [CONTACTID_FIELD, CONTACTEMAIL_FIELD, CONTACTPHONE_FIELD, SUBJECT_FIELD, DESCRIPTION_FIELD]; //setting fields on "Case" object
        */ 

        /*
        myFields[0] = Name; 
        myFields[1] = Email; 
        myFields[2] = Phone; 
        myFields[3] = Subject; 
        myFields[4] = Description; 
        */ 

    /*
        clickedsubmit(){
            // Run code when account is created.
        }
*/

    }


}