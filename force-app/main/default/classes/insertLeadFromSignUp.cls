public with sharing class insertLeadFromSignUp {

    //Creates a lead from the sign up button
    
    @AuraEnabled
    public static void  insertLeadFromSignUp(String email, String password) {

        //Creates a new lead with new information
        Lead a  = new Lead(email = email, Password__c = password , lastName = 'JoeMama', Company = 'mom' );

        //Queries for any duplicates
        List<Lead> listOfLeads = [SELECT Name 
                FROM Lead
                WHERE Email LIKE :email];

        //Inserts if no duplicates, and debugs if there's a problem.
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