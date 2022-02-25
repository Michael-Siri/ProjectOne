trigger CaseEmailTrigger on Case (after insert) { //Any time a case is mad, This trigger called CaseEmailTrigger on Case object, before insert
List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
    
    List<String> sendTo = new List<String>(); 

    sendTo.Add('mikegarnerjobs@gmail.com');

    for(Case cs : trigger.new){
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(sendTo);
        mail.setSubject('Thank you for submitting your issue.');
        String body = 'Thank you for your time. Your case will be resolved shortly.';
        mail.setHtmlBody(body);
        mails.add(mail);
    }

            Messaging.sendEmail(mails);
    
}