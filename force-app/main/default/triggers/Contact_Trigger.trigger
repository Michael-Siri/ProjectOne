trigger Contact_Trigger on Contact (before insert) {
    
    List<Contact> cons = [SELECT Name FROM Contact];
	/*
    for(Contact c : cons) {
        for(Contact d: trigger.new){
            if(c.FirstName == d.FirstName){
            	System.debug(c.LastName);
				System.debug(Trigger.new);
            }
        }
    }
*/

}