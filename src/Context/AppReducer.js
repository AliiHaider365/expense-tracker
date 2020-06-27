export  default (state ,action ) =>{
    switch (action.type) {
         case "ADD-Transaction":
            return   {
                 ...state ,
                 transaction: [ action.payload ,...state.transaction]
            }
         
         case 'DELETE_TRANSACTION':
            return {
              ...state,
              transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            
        }
}