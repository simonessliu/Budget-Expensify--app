const expenseReducerDefaultState = [
  
];

export default (state = expenseReducerDefaultState,action) =>{
    switch (action.type) {
        case 'ADD_EXPENSE' :
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE' :

            return state.filter(({id}) => {
                return id !== action.id
            });
            // we have destructored each obj in state and only use id
            // if this is hard to under stand, we can use the function below.

            // return state.filter((expense) => {
            //     return expense.id !== action.id
            // });

            //filters function:
            
            // this.setState((prevState) => ({
            //     options: prevState.options.filter((option) => {
            //         return optionToRemove !== option;
            //     })
            // }));
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense
                }
            })
       
        default: 
            return state;
    }
};

