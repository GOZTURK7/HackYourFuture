
let total = 0;
const sum = ()=>{
    for(let i=2; i<process.argv.length; i++){
        total+=Number(process.argv[i]);
    }
    console.log(total);
}

sum();

