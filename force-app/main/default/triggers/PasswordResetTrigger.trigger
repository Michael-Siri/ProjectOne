/******************************
Written by: David L.
Describtion: This trigger will run only when the password reset token
field on lead changes, and will send an email with a link
to the customer to change their password
*******************************/

trigger PasswordResetTrigger on Lead (before update) {

    // get the new updated record
    for (Lead led: Trigger.new){
        // get the old record
    	Lead oldLead = Trigger.oldMap.get(led.ID);
        // make sure the password reset token is the field that changes AND the updated version is not null
        if((led.Password_Reset_Token__c != oldLead.Password_Reset_Token__c) && led.Password_Reset_Token__c != null){
            
            //use the built in Messaging class to send the email
            List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
            
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            
            //the address to send email to
            List<String> sendTo = new List<String>();
            sendTo.add(led.Email);
            mail.setToAddresses(sendTo);
            
            //the email thats SENDING the email
            mail.setReplyTo('davidlabib11@gmail.com');
      		mail.setSenderDisplayName('Michael Accessories Offical');
            
            //setting the subject and body of the email
            mail.setSubject('Reset Your Password');
            
            String body = 'Dear ' + led.FirstName + ', Here is the link to reset your password: https://galeforcelol-developer-edition.na213.force.com/s/#/?token=' + led.Password_Reset_Token__c;
			mail.setHtmlBody(body);
            
            //sends the email
            mails.add(mail);
			Messaging.sendEmail(mails);
			System.debug('Email Sent!');            
        }
    }
    System.debug('Trigger worked');
    

/******************************
Written by: Whitney Dwire
Describtion: This part of the trigger will run only when
the password field is changed, to delete the token from the database
*******************************/


    //Get the updated record from the database and update its custom field 
    //according to the updated Passwordc value
    for(Lead lead : Trigger.new) {

        //get the old record from the database
        Lead oldLead = Trigger.oldMap.get(lead.ID);
        //check if the password field is the one that changed
        if(Lead.Password__c != oldLead.Password__c)
        {
            lead.Password_Reset_Token__c = null;
            //Update the lead in the database

        }
    }
}