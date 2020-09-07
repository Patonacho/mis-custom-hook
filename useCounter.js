import { useState } from "react"


export const useCounter = (initialState = 10, limit=30) => {
   
const [counter, setCounter] = useState(initialState);

const increment = ()=>{
    setCounter(counter+1);
};
const decrement = ()=>{
    setCounter(counter-1);
}
const reset = ()=>{
    setCounter(initialState);
}

if(counter>limit){setCounter(1)}

return {
    counter,
    increment,
    decrement,
    reset
};

}




// import { useState } from "react"


// export const useCounter = (initialState = 10) => {
   
// const [state, setstate] = useState(initialState);

// const increment = (factor)=>{
//     setstate(state+factor);
// };
// const decrement = (factor)=>{
//     setstate(state-factor);
// }
// const reset = ()=>{
//     setstate(initialState);
// }

// return {
//     state,
//     increment,
//     decrement,
//     reset
// };

// }
