public with sharing class Login {
    //Currently just a wire test Class    
    @AuraEnabled
    public static void getSomething(String queryEmail, String queryPassword) {

        
        
        // String key = '%' + query + '%';
        Lead a  = new Lead(email = queryEmail, Password__c = queryPassword);

        System.debug(queryPassword);
        // List<Contact> acc = [SELECT Name, Phone, Email
        //         FROM Contact
        //         WHERE Name LIKE :queryEmail];

        List<Lead> listOfLeads = [SELECT Name 
                FROM Lead
                WHERE Email LIKE :queryEmail];

        System.debug(listOfLeads);

        try{
            if(listOfLeads.size() == 0){
                System.debug('yes');
                insert a;
            }
        }
        catch(DmlException e) {
        System.debug('An unexpected error has occurred: ' + e.getMessage());
    }
        

    }

    
}