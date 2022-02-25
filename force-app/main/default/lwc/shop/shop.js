import { LightningElement, track } from 'lwc';
import s22front from '@salesforce/resourceUrl/s22_front';
import rating_star from '@salesforce/resourceUrl/rating_star';
import rating_star_blank from '@salesforce/resourceUrl/rating_star_blank';
import i13_mini_front from '@salesforce/resourceUrl/i13_mini_front';
import i13_mini_back from '@salesforce/resourceUrl/i13_mini_back';
import i13_proMax_front from '@salesforce/resourceUrl/i13_proMax_front';
import i13_proMax_back from '@salesforce/resourceUrl/i13_proMax_back';
import i13_pro_front from '@salesforce/resourceUrl/i13_pro_front';
import i13_pro_back from '@salesforce/resourceUrl/i13_pro_back';
import i12_front from '@salesforce/resourceUrl/i12_front';
import i12_back from '@salesforce/resourceUrl/i12_back';
import z_flip3_front from '@salesforce/resourceUrl/z_flip3_front';
import z_flip3_back from '@salesforce/resourceUrl/z_flip3_back';
import spark_hotspot from '@salesforce/resourceUrl/spark_hotspot';
import s22_ultra_front from '@salesforce/resourceUrl/s22_ultra_front';
import s22_ultra_back from '@salesforce/resourceUrl/s22_ultra_back';
import pixel6_front from '@salesforce/resourceUrl/pixel6_front';
import pixel6_back from '@salesforce/resourceUrl/pixel6_back';
import netgear_nighthawk from '@salesforce/resourceUrl/netgear_nighthawk';
import s22_back from '@salesforce/resourceUrl/s22_back';
import apple_watch_7_side from '@salesforce/resourceUrl/apple_watch_7_side';
import apple_watch_7_front from '@salesforce/resourceUrl/apple_watch_7_front';
import att_10w_charging_pad  from '@salesforce/resourceUrl/att_wireless_10w';

import getProductPriceFromName from '@salesforce/apex/getProductPriceFromName.getProductPriceFromName'

export default class Shop extends LightningElement {
    s22frontUrl= s22front;

    rating_star = rating_star;
    rating_star_blank = rating_star_blank;
    i13_mini_front = i13_mini_front;
    i13_mini_back  = i13_mini_back;
    i13_proMax_front = i13_proMax_front;
    i13_proMax_back  = i13_proMax_back;
    i13_pro_front = i13_pro_front;
    i13_pro_back = i13_pro_back;
    i12_front = i12_front;
    i12_back = i12_back;
    z_flip3_front = z_flip3_front;
    z_flip3_back = z_flip3_back;
    spark_hotspot = spark_hotspot;
    s22_ultra_front = s22_ultra_front;
    s22_ultra_back = s22_ultra_back;
    pixel6_front = pixel6_front;
    pixel6_back = pixel6_back;
    netgear_nighthawk = netgear_nighthawk; 
    s22_back = s22_back;
    apple_watch_7_side = apple_watch_7_side;
    apple_watch_7_front  = apple_watch_7_front;
    att_10w_charging_pad = att_10w_charging_pad;
    // apple_watch_front = phone_accessory_images + '/apple_watch_7_front.png';
    // apple_watch_side = phone_accessory_images + '/apple_watch7_SIDE.png';
    // att_10w_charging_pad = phone_accessory_images + '/AT&T_10W_Wireless_Charging_Pad.png';
    // s22_back = phone_accessory_images + '/Galaxy_s22_BACK.png';
    // s22_front = phone_accessory_images + '/Galaxy_s22_FRONT.png';
    // iphone_12_back = phone_accessory_images + '/i12_BACK.png';
    // iphone_12_front = phone_accessory_images + '/i12_FRONT.png';
    // i13_mini_back = phone_accessory_images + '/iphone_13_mini_back.png';
    // i13_mini_front = phone_accessory_images + '/iphone_13_mini_front.png';
    // iphone_pro_13_front = phone_accessory_images + '/i13_pro_FRONT.png';
    // iphone_pro_13_back = phone_accessory_images + '/i13_pro_BACK.png';
    // pixel_6_back = phone_accessory_images + '/Pixel_6_BACK.png';
    // pixel_6_front = phone_accessory_images + '/Pixel6_FRONT.png';
    // rating_star_blank = phone_accessory_images + '/rating-star-blank.png';
    // rating_star = phone_accessory_images + '/rating-star.png';
    // s22_ultra_back = phone_accessory_images + '/s22_ultra_BACK.png';
    // s22_ultra_front = phone_accessory_images + '/s22_ultra_FRONT.png';
    // spark_hotspot = phone_accessory_images + '/Spark_Hotspot.png';
    // zFlip_back = phone_accessory_images + '/Z_flip3_BACK.png';
    // zFlip_front = phone_accessory_images + '/Z_Flip3_FRONT.png';
    // i13_pro_MAX_BACK = phone_accessory_images + '/i13_pro_max_BACK.png';
    // i13_pro_MAX_FRONT = phone_accessory_images + '/i13_ProMax_FRONT.png';
    // netgear_nighthawk = phone_accessory_images + '/netgear-nighthalk.png';

    @track sum = 0;
    onemore;


    handleClick(e)
    {
        console.log(e.target.name);
        getProductPriceFromName({ name: e.target.name })
        .then((result) => {
            console.log(result);
            this.sum += result;
            console.log(this.sum);
            this.sum =  Math.round((this.sum + Number.EPSILON) * 100) / 100;
            this.error = undefined;

        })
        .catch((error) => {
            this.error = error;
            this.onemore = undefined;
        });
        
    }
}