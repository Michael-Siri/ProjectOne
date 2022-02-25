import{LightningElement} from 'lwc';
import Twitter from '@salesforce/resourceUrl/Twitter';
import Facebook from '@salesforce/resourceUrl/Facebook';
import Instagram from '@salesforce/resourceUrl/Instagram';
import Telegram from '@salesforce/resourceUrl/Telegram';
import Pinterest from '@salesforce/resourceUrl/Pinterest';

export default class footer extends LightningElement{
    TwitterUrl = Twitter;
    FacebookUrl = Facebook;
    InstagramUrl = Instagram;
    TelegramUrl = Telegram;
    PinterestUrl = Pinterest;
}