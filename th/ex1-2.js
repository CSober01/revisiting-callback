/* 
- เรากำลังสร้างเกมอยู่ ตัวละครในเกมของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. โจมตีผู้เล่นอื่น
    2. วิ่งหนีผู้เล่นอื่น
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

let damage = 30;
let messageDamage = `💥 โจมตีสำเร็จ! สร้างความเสียหาย ${damage} แต้ม`;
let messageRunAway = `😨 หนีสำเร็จ! รอดตายหวุดหวิด!`;
// Start Coding Here

const playerAction = (action) => action();
const attack = (action) => messageDamage;
const runAway = (action) => messageRunAway;

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(playerAction(attack)); // 💥 โจมตีสำเร็จ! สร้างความเสียหาย 30 แต้ม
console.log(playerAction(runAway)); // 😨 หนีสำเร็จ! รอดตายหวุดหวิด!
