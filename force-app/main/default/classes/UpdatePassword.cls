/******************************
Written by: Whitney Dwire
Describtion: This class will take the password and token
when a user clicks the submit button on the reset password form
and will update the password that is associated with the token
*******************************/

public class UpdatePassword {
    @AuraEnabled
    public static String setPassword(String newPassword, String token) {

        //find the lead with associated with the token
        List<Lead> leads = new List<Lead>();
        leads = Database.Query('SELECT Password__c FROM Lead WHERE Password_Reset_Token__c LIKE :token');

        //update the password field in the org
        Lead lead = leads[0];
        lead.Password__c = newPassword;

        update lead;

        //returns a string to let us know it updated
        return 'Password is reset';

    }
}