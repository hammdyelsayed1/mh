function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let location = document.getElementById("location").value;
  let details = document.getElementById("details").value;

  let msg =
    "طلب نقل عفش 🚚%0A" +
    "الاسم: " + name + "%0A" +
    "الجوال: " + phone + "%0A" +
    "الموقع: " + location + "%0A" +
    "التفاصيل: " + details;

  window.open(
    "https://wa.me/966549491055?text=" + msg,
    "_blank"
  );
}










<script>
const links = document.querySelectorAll(".main-nav a");
const currentPage = location.pathname.split("/").pop();

links.forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
</script>

















<script>
function validatePhoneLive(){
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");

  // إزالة أي حروف
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

  const phone = phoneInput.value;
  const regex = /^(05|5)[0-9]{8}$/;

  if(phone.length >= 9){
    if(regex.test(phone)){
      phoneError.style.display = "none";
    } else {
      phoneError.style.display = "block";
    }
  } else {
    phoneError.style.display = "none";
  }
}

function sendWhatsApp(){

  const name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  const location = document.getElementById("location").value.trim();
  const details = document.getElementById("details").value.trim();
  const phoneError = document.getElementById("phoneError");

  const regex = /^(05|5)[0-9]{8}$/;

  if(!regex.test(phone)){
    phoneError.style.display = "block";
    return;
  }

  // تحويل الرقم إلى صيغة دولية 966
  if(phone.startsWith("05")){
    phone = "966" + phone.substring(1);
  } else if(phone.startsWith("5")){
    phone = "966" + phone;
  }

  const whatsappNumber = "966549491055";

  const message =
`طلب نقل عفش 🚚
الاسم: ${name}
رقم الجوال: ${phone}
الموقع: ${location}
التفاصيل: ${details}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
</script>