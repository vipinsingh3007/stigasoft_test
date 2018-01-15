import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const initialToDoListItems ={
  1:'To do item1',
  2:'To do item2',
  3:'To do item3'
}

function items(state=initialToDoListItems,action){
  const { key, item } = action;
  switch(action.type){
      case 'ADD_ITEM':
        return {
          ...state,
          item
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
