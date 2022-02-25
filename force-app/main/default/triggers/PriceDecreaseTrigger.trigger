trigger PriceDecreaseTrigger on Product2 (before insert) {

        Decimal tempbok;
        //Create a product List
        List<Product2> productList = new List<Product2>();

        //Query for the price with string name
        productList = [SELECT name,price__c FROM Product2];

        for(Product2 p: productList){
            tempbok = p.price__c;
            if(tempbok > 1000){
                tempbok = tempbok * 0.9;
                // throw new Exception("Price is too high");
            }
        }
            

    // for(Product2 p : Product2) {
    //     if(p.price__c > 1000) {
    //         p.price__c = p.price__c * 0.9;
    //     }
    // }
    
}