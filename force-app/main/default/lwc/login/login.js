import {LightningElement, track} from 'lwc';
import updateLeadFromLogin from '@salesforce/apex/updateLeadFromLogin.updateLeadFromLogin';

export default class login extends LightningElement{

    @track email;
    @track password;

    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

    handleMenu1(e){
        console.log('Hello');

        let inp=this.template.querySelectorAll("input");
        console.log(inp);
        inp.forEach(function(element){
            if(element.name == "pass")
                this.password=element.value;

            else if(element.name == "user")
                this.email=element.value;
        },this);

        updateLeadFromLogin({ email: this.email, password: this.password })
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