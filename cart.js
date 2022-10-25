/* Create a JS Cart
JS Function that takes in an:
    * an Item JS Object [dictionary] (the contents of which are unimportant, other than they have an id key)
    * a Cart Array which you should Default to an EMPTY ARRAY (because our cart starts empty)
    * function uses switch statement to perform a different action based on the Action String 
    - representing what the user does: "addToCart", "remove1FromCart", "removeAllFromCart" "emptyCart"
    - EACH ACTION RETURNS a fresh Cart array with the changes
    - if the user asked to remove an item not in the cart, just return the cart unchanged
CATCH:
    Perform each of these actions as an Out-of-Place (the cart object that was inputted will never be changed and we will return a brand new copy of cart [array]) algorithm, not In-Place
*/

// JS Object (dictionary)
let items = {
    1: "yoga pants",
    2: "exercise shirt",
    3: "swim shorts",
    4: "swimsuit",
    5: "yoga mat",
    6: "goggles",
    7: "weights",
    8: "protein drink",
    9: "meal replacement bars"
};

// Cart Array
 let cart = []

function cartAction(action, item) {
    switch(cartAction) {
        case "add":
            cart.push(item);
            console.log(cart);
            break;
        case "removeOne":
            if(array.includes[i]){
                cart.splice(cart.indexOf(item),1);
                    console.log(cart);
            }
            else (!array.includes[i]){
                    console.log(cart);
            };
            break;
        case "removeAllSameItem":
            for(i=0; i<cart.length;i++){
                if (cart[i] == item){    
                    cart.clear(item)
                    count -= 1
                console.log(cart);
                break;
                    }
                };
        case "clear":
            cart = [];
            console.log(cart);
            break;
    }
};


cartAction("add","weights")
cartAction("add","yoga pants")
cartAction("add","yoga pants")
cartAction("add","swimsuit")
cartAction("add","weights")
cartAction("add","protein drink")
cartAction("add","meal replacement bars")
cartAction("add","protein drink")
cartAction("add","meal replacement bars")


cartAction("removeOne","meal replacement bars")

cartAction("removeAllSameItem","weights")

