const cardReducer = (state = {
    volume: 0.1,
  }, action) => {
    switch(action.type){
  
  
      case 'setVolume':
        return {
          ...state,
          volume: action.payload.volume
        }
  
      
      default: return state;
      
    } 
  }
  
  export default cardReducer;
  