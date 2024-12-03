


const func = () => {
    interface Item {
        id: number, 
        name: string,
        pice: number, 
        quantity: number
    }
    
    class ShoppingCart { 
        items: Item[];
    
        constructor(items: Item[]){
            this.items = items
        }
    
        addItem = (item: Item) =>{ 
            const itemIndex = this.items.findIndex((oldItem) => oldItem.id === item.id)
            if(itemIndex !== -1){
                this.items[itemIndex].quantity += item.quantity
                console.log(`updated successfully: { quantity: , ${this.items[itemIndex].quantity} }`)
                return
            }
            this.items.push(item)
            console.log('added successfully: ', item)
        }
        removeItem = (itemId: number) => {
            const itemIndex = this.items.findIndex((item) => item.id === itemId)
            if(itemIndex === -1){
                console.log('item Not Found, id: ', itemId)
                return
            }
            this.items.splice(itemIndex, 1);
            console.log('removed successfully')
        }
        calcTotalPriceInChart = () => {
            let sum = 0
            for(let item of this.items){
                sum += item.pice * item.quantity
            }
            console.log('Total price of your cart: ', sum)
        }
    }
    console.log('----------------------')
    const shoppingCart = new ShoppingCart([])
    shoppingCart.calcTotalPriceInChart()    
    console.log('----------------------')
    shoppingCart.addItem({
        id: 4, 
        name: 'pc',
        pice: 1500, 
        quantity: 2
    })
    console.log('----------------------')
    shoppingCart.calcTotalPriceInChart()   
    console.log('----------------------') 
    shoppingCart.addItem({
        id: 4, 
        name: 'pc',
        pice: 1500, 
        quantity: 2
    })
    console.log('----------------------')
    shoppingCart.calcTotalPriceInChart()  
    console.log('----------------------')  
    shoppingCart.removeItem(4)
    console.log('----------------------')
    shoppingCart.addItem({
        id: 4, 
        name: 'pc',
        pice: 1500, 
        quantity: 2
    })
    console.log('----------------------')
    shoppingCart.removeItem(4)
    console.log('----------------------')
    shoppingCart.calcTotalPriceInChart()    
    console.log('----------------------')
    shoppingCart.removeItem(5)
    console.log('----------------------')
}

export default func