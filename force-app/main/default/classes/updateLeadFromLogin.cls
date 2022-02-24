public with sharing class updateLeadFromLogin {
    @AuraEnabled
    public static void updateLeadFromLogin(String email, String password) {

        //Creates a new lead
        Lead a  = new Lead();

        //Queries for matching email and passwords
        List<Lead> listOfLeads = [SELECT Name, Password__c
        FROM Lead
        WHERE Email LIKE :email];

        try{
            if(listOfLeads.size() == 1){
                System.debug('yes');
                System.debug(password + '0');
                System.debug(listOfLeads[0].Password__c + '1');
                if(password == listOfLeads[0].Password__c)
                System.debug('true');
                else{
                    System.debug('false');
                }
            }
        }
        catch(DmlException e) {
        System.debug('An unexpected error has occurred: ' + e.getMessage());
    }
}
}