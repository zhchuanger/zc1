// let add = {
//     type:'ADD'
// }

export let add = (num) =>{
    console.log('add--action',num);
    return {
        type:'ADD',
        num
    }
}

export let minus = (num) =>{
    console.log('add--action',num);
    return {
        type:'MINUS',
        num
    }
}