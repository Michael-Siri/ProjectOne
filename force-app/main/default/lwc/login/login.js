import {LightningElement, track, api} from 'lwc';
import updateLeadFromLogin from '@salesforce/apex/updateLeadFromLogin.updateLeadFromLogin';

export default class login extends LightningElement{

    @track email;
    @track password;
    @track cookie;
    @track error;
    @api loginemail;

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
            this.cookie = result;
            if(this.cookie = true)
            this.dispatchEvent(new CustomEvent('changetoemail', {detail : this.email}));
            this.error = undefined;
        })
        .catch((error) => {
            this.error = error;
            this.cookie = undefined;
        });
        
        
    }

}