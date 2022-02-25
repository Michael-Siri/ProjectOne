import {LightningElement, track} from 'lwc';
import signupURL from '@salesforce/resourceUrl/MichaelCellphone1';

export default class signup extends LightningElement{


    //Variables
    @track email;
    @track password;

    signupLink=  `${signupURL}#surface1`

    //Send custom event on button click/sign up
    handleMenu(e){
        
        //Capture input
        let inp=this.template.querySelectorAll("input");
        console.log(inp);
        //Loop through all inputs and set them to js variables, i.e. input to email.
        inp.forEach(function(element){
            if(element.name == "inputPass")
                this.password=element.value;

            else if(element.name == "inputEmail")
                this.email=element.value;
        },this);


        //Create Object for multiple parameters
        let car = {detail : e.target.title, password : this.password, email:this.email};
        this.dispatchEvent(new CustomEvent('menuchange', {detail : car}));
    }

    //Send custom event on button click/login
    handleMenu1(e){

        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));

        console.log(e.target.title);
    }
}