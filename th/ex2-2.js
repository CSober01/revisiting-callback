/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer:

ง่ายในการแก้ไข และ สดวกในการเรียกใช้ เพราะเมื่อข้อมูลเปลี่ยนโปรแกรมก็ยังคำนวนได้ไม่ต้องไปแก้หลายส่วน

2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer:

อ่านง่ายขึ้น เพราะระบุชัดเจนว่า action นี้ทำอะไรแล้วจะเกิดบ้าง แก้ไขง่ายไม่กี่จุด

3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer:  

Callback คือ Function ที่ถูกส่งเข้าไปเป็น Argument ของ Function อื่น เพื่อให้ Function นั้นเรียกใช้งานภายหลัง
เช่น const add = (num1, num2) => num1 + num2; เป็น Callback Function เพราะถูกส่งเข้าไปใน calculate
Higher-Order Function คือ Function ที่สามารถรับ Function อื่นเข้ามาเป็น Parameter หรือส่ง Function กลับออกมาเป็น Return Value ได้
เช่น calculate(10, 5, add) โดย calculate เป็น Higher-Order Function เพราะรับ Function (cal) เข้ามาเป็น Parameter

สรุปคือ 
Callback = Function ที่ถูกส่งไปให้ Function อื่นเรียกใช้
Higher-Order Function = Function ที่รับ Function อื่นหรือคืน Function ออกมาได้
*/
