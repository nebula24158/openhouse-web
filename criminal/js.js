const textElement = document.getElementById("explodingText");
const letters = textElement.textContent.split("");

// แยกข้อความเป็นตัวอักษร
textElement.innerHTML = letters
  .map(letter => `<span class="letter">${letter}</span>`)
  .join("");

const letterElements = document.querySelectorAll(".letter");

// เพิ่ม Event Listener ให้แต่ละตัวอักษร
letterElements.forEach(letter => {
  letter.addEventListener("click", () => {
    const randomX = (Math.random() - 0.5) * 500; // ตำแหน่ง X แบบสุ่ม
    const randomY = (Math.random() - 0.5) * 500; // ตำแหน่ง Y แบบสุ่ม
    const randomRotate = Math.random() * 720 - 360; // การหมุนแบบสุ่ม

    letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    letter.style.opacity = "0"; // จางหายไป
    letter.style.pointerEvents = "none"; // ปิดการคลิกซ้ำ
  });
});

// สร้างจุดวิบวับในพื้นหลัง
function createSparkles() {
  const container = document.querySelector("body");
  for (let i = 0; i < 50; i++) { // จำนวนจุดแสง
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // ตำแหน่งสุ่มในหน้าจอ
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    sparkle.style.left = `${randomX}px`;
    sparkle.style.top = `${randomY}px`;

    // ความเร็วการกระพริบแบบสุ่ม
    sparkle.style.animationDuration = `${1 + Math.random() * 2}s`;

    container.appendChild(sparkle);
  }
}

// เรียกใช้ฟังก์ชันสร้างจุดวิบวับ
createSparkles();

function createFloatingText() {
  const container = document.querySelector("body");
  const phrases = ["ข้อมูลลับสุดยอด", "คลิปหลุดโอม", "Welcome!", "ขโมยของแล้วขายที่ได้", "how to หนีคุก"]; // ข้อความที่ลอย
  for (let i = 0; i < 10; i++) { // จำนวนข้อความลอย
    const floatingText = document.createElement("div");
    floatingText.classList.add("floating-text");
    floatingText.textContent = phrases[Math.floor(Math.random() * phrases.length)]; // ข้อความสุ่ม

    // ตำแหน่งเริ่มต้นแบบสุ่ม
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    floatingText.style.left = `${randomX}px`;
    floatingText.style.top = `${randomY}px`;

    // ความเร็วการลอยแบบสุ่ม
    floatingText.style.animationDuration = `${5 + Math.random() * 5}s`;

    container.appendChild(floatingText);
  }
}

// เรียกใช้ฟังก์ชันสร้างข้อความลอย
createFloatingText();