

console.log("Start!")

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
    switch(action) {
        case "add":
            cart.push(item);
            break;
        case "removeOne":
            cart.splice(cart.indexOf(item), 1)
            break;
        case "removeAllSameItem":
            count = 0
            for (i = 0; i < cart.length; i++){
                if (cart[i] == item){ 
                    cart.splice(cart.indexOf(item), 1)
                    count += 1
                } 
            }; break;
        case "clear":
            cart = [];
            console.log("Your cart is empty.")
            break;
    }
    console.log(cart);
};


    cartAction("add","weights")
    cartAction("add","swimsuit")
    cartAction("add","meal replacement bars")
    cartAction("add","meal replacement bars")
    cartAction("add","protein drink")
    cartAction("add","yoga pants")
    cartAction("add","yoga pants")
    cartAction("add","weights")
    cartAction("add","swimsuit")
    cartAction("add","weights")

    // cartAction("removeOne","swimsuit")

    // cartAction("removeAllSameItem","weights")

    cartAction("clear")