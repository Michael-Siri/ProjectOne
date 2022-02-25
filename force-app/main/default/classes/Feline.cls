public abstract class Feline implements Animal {
    
    public void Bark(){
        System.debug('Cats dont bark!');
    }
    public void Meow(){
        System.debug('Cats meow alot');
    }
    public void Die(){
        System.debug('Cat died, they have 8 lives now');
    }
    
    public abstract void eat();

    
    public virtual void sleeping(){
        System.debug('Animal is slepeping (:');
    }
    
    
    
}