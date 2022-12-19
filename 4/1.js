//challenge start
// Function splitBill(amount , numPeople){
//     Return "Each person needs to pay ${amount/ numPeople} "
// }
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`
Console.log(splitBill(10,2));

// stretch goal start
// Function countdown(startingNumber ,step){
//     let countFromNum = startingNumber + step
//     Return function decrease(){
//         countFromNum -=step;
//         Return countFromNum;
//     }
// }
const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () => countFromNum -= step;
}
const countingDown =countdown(20,2);
console.log(countingDown());
