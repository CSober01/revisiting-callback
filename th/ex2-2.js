/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer:

ง่ายในการแก้ไข และ สดวกในการเรียกใช้ เพราะเมื่อข้อมูลเปลี่ยนโปรแกรมก็ยังคำนวนได้ไม่ต้องไปแก้หลายส่วน

2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer:

อ่านง่ายขึ้น เพราะระบุชัดเจนว่า action นี้ทำอะไรแล้วจะเกิดบ้าง แก้ไขง่ายไม่กี่จุด

3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  

Callback คือ การเรียกใช้ function ด้วย Higher-Order Function 
เช่น const calculate = (num1, num2, cal) => cal(num1, num2); โดยใน parameter cal คือ Function ที่ถูกเรียกใช้โดย Function calculate
Higher-Order Function คือ Function ที่ระบุไว้ว่าจะเอาข้อมูลไปคำนวนหรือทำอะไรต่อ
เช่น calculate(10, 5, add) โดย parameter add คือ Higher-Order Function ที่ถูกส่งไปใช้ใน calculate
*/
