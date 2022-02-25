import {LightningElement,api} from 'lwc';


export default class nav extends LightningElement{

    @api loginemail;

    handleMenu(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }


}