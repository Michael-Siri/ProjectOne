public abstract class Canine implements Animal {
    
    public void Bark(){
        System.debug('Wolf barks');
    }
    public void Meow(){
        System.debug('Wolf doesnt meow!');
    }
    public void Die(){
        System.debug('Animal Died ):');
    }
    
    public abstract void eat();

    
    public virtual void sleeping(){
        System.debug('Animal is slepeping (:');
    }
    
    
    
}