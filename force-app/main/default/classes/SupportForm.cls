public with sharing class SupportForm {
    @auraEnabled
    public static void GetSupportForm(string name, string email, string phone, string subject) {
/*
        import CASE_OBJECT from '@salesforce/schema/Case';
        import CONTACTID_FIELD from '@salesforce/schema/ContactId';
        import CONTACTEMAIL_FIELD from '@salesforce/schema/ContactEmail';
        import CONTACTPHONE_FIELD from '@salesforce/schema/ContactPhone';
        import SUBJECT_FIELD from '@salesforce/schema/Subject';
        import DESCRIPTION_FIELD from '@salesforce/schema/Description';
*/
        string description; 

        Case thisCase = new Case(CustomName__c = name, CustomEmail__c = email, CustomPhone__c = phone, Subject = subject); //Create "Case"
        insert thisCase;

        /*
        public void SubmitForm(string ContactName, string Email, integer Phone, string Subject, string Description){

            //set variables 

            //make record

        }
        */

        



    }
}