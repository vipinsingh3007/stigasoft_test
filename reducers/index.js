import { ADD_ITEM, REMOVE_ITEM } from '../actions';

function items(state={},action){
    const { key } = action;
      switch(action.type){
          case 'ADD_ITEM':
            return {
              ...state,
              ...action.item
            }
            break;
          case 'REMOVE_ITEM':
            return{
              ...state,
              [key]:null
            }
            break;
          default:
            return state;
        }
}

export default items;
