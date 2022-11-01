Homework: Create a JS Cart

JS Function that takes in an:
    * an Item JS Object [dictionary] (the contents of which are unimportant, other than they have an id key)
    * a Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)
    * function uses switch statement to perform a different action based on the Action String 
    - representing what the user does: "addToCart", "remove1FromCart", "removeAllFromCart" "emptyCart"
    - EACH ACTION RETURNS a fresh Cart array with the changes
    - if the user asked to remove an item not in the cart, just return the cart unchanged

CATCH:
    Perform each of these actions as an Out-of-Place (the cart object that was inputted will never be changed and we will return a brand new copy of cart [array]) algorithm, not In-Place

*******************************
** Kevin, rescue me section: **
*******************************
I believe splice is In-place! I can't figure out what else to use.

