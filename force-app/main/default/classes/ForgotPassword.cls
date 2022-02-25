/******************************
Written by: David L.
Describtion: This class will take the email the user inputs
search to make sure it exists in the org
if it does it will generate a token and update the record
which will then trigger PasswordResetTrigger
*******************************/

public class ForgotPassword {

    @AuraEnabled
    public static String resetPassword(String searchString){
        String email = '%' + searchString + '%'; //add % to front and end of email to find EXACT matcg
        String potDupe = 'email doesn\'t exist';
            //query to find lead with the passed email
        list <Lead> lead = [
            SELECT Email, Password_Reset_Token__c
            FROM Lead
            WHERE Email LIKE :email
            LIMIT 1
        ];
        //checks if the email exists
        Lead target = lead[0];
        if(target.Email == searchString){
            potDupe = 'email exists in Lead';
        }
    
        System.debug(potDupe);
        
        //code is used to generate a random token for security reasons
        Integer len = 32;
        Blob blobKey = crypto.generateAesKey(128);
        String key = EncodingUtil.convertToHex(blobKey);
        String token = key.substring(0,len);            
        System.debug(token);
        
        //update the lead record with the token
        //this will trigger the PasswordResetTrigger
        target.Password_Reset_Token__c = token;
        update target;
        
        return 'Email sent!';   
    }


    
    
}