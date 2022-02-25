public with sharing class getProductPriceFromName {
    @AuraEnabled
    public static Decimal getProductPriceFromName(String name) {

        //Initialize temp variable
        Decimal tempbok;

        //Create a product List
        List<Product2> acc = new List<Product2>();

        //Query for the price with string name
        acc = [SELECT name,price__c FROM Product2
              WHERE name LIKE :name];


        for(Product2 p:acc){
        tempbok = p.price__c;
        }
        System.debug(tempbok);
        
        return (tempbok);

    }
}