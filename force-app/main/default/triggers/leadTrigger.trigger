trigger leadTrigger on Lead (after insert) {
    
    //Creates a list of emails to send
	List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
	List<String> sendTo = new List<String>();
    
    //Add the the designated email
  	sendTo.add('michaelksbookdesign@gmail.com');
    
    //Loops through the email list and creates an email for each
    for(Lead n : trigger.new){
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(sendTo);
        mail.setSubject('New Account created for ' + n.lastName);
        String body = 'Thank you for creating an account on our site';
        mail.setHtmlBody(body);
        mails.add(mail);    
    }
    
    //Sends the emails, in this case one to michaelksbookdesign@gmail.com
    Messaging.sendEmail(mails);
    
}