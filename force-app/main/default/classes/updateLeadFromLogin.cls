public with sharing class updateLeadFromLogin {
    @AuraEnabled
    public static boolean updateLeadFromLogin(String email, String password) {

        //Creates a new lead
        Lead a  = new Lead();

        //Queries for matching email and passwords
        List<Lead> listOfLeads = [SELECT Name, Password__c
        FROM Lead
        WHERE Email LIKE :email];

        try{
            if(listOfLeads.size() == 1){
                if(password == listOfLeads[0].Password__c){
                    system.debug(password);
                    system.debug(listOfLeads[0].Password__c);
                listOfLeads[0].loggedin__c = true;
                update listOfLEads;
                return true;
                }
                else{
                    System.debug('false');
                    return false;
                }
            }
        }
        catch(DmlException e) {
        System.debug('An unexpected error has occurred: ' + e.getMessage());
    }
    return false;
}
}