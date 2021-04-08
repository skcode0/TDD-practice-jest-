export default function arrayAnalysis(arr){
    let newArr = arr.map(num => typeof num !== "number" ? Number(num) : num);
    return(
        {
            average: newArr.length ? +(newArr.reduce((a,b) => +a + +b, 0) / newArr.length).toFixed(2) : 0,
            min: newArr.length ? Math.min(...arr) : 0,
            max: newArr.length ? Math.max(...arr) : 0,
            length: newArr.length
        }
    )
}
