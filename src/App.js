import React, { useState } from "react";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import "./App.css";
import bear from "./img/bear.jpeg";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  const handleGiftClick = () => {
    if (!giftOpened) {
      setShowConfetti(true);
      Swal.fire({
        title: "🎉 Bất ngờ chưa! 🎁",
        html: `
          <p>Chúc Huyền Bear sinh nhật vui vẻ, tuổi mới nhiều sức khỏe nhiều tiền nhen ^^</p>
          <p style="color: #2a9df4; font-weight: bold;">
            Hãy nhớ rằng bạn luôn là người đặc biệt nhất!
          </p>
        `,
        imageUrl: bear,
        imageWidth: 400, // Kích thước ảnh 400x400
        imageHeight: 400, // Kích thước ảnh 400x400
        imageAlt: "Quà sinh nhật",
        confirmButtonText: "Cảm ơn bạn bí mật 💖",
        background: "#f5f9fd",
        confirmButtonColor: "#2a9df4",
        heightAuto: false, // Không tự động điều chỉnh chiều cao
        customClass: {
          image: "swal-image", // Áp dụng class cho ảnh
        },
        didOpen: () => {
          // Đặt CSS trực tiếp cho ảnh khi modal mở
          const image = document.querySelector(".swal-image");
          if (image) {
            image.style.objectFit = "contain"; // Đảm bảo ảnh không bị kéo căng
            image.style.maxWidth = "400px"; // Đảm bảo ảnh có chiều rộng là 400px
            image.style.maxHeight = "400px"; // Đảm bảo ảnh có chiều cao là 400px
          }
        },
      }).then(() => {
        setGiftOpened(true);
        setShowConfetti(false);
      });
    } else {
      Swal.fire({
        title: "🎁 Bạn đã mở quà rồi!",
        text: "Nhưng tớ vẫn muốn chúc cậu thật nhiều niềm vui nhé 💖",
        icon: "info",
        confirmButtonText: "OK, cảm ơn!",
        background: "#f5f9fd",
        confirmButtonColor: "#2a9df4",
        heightAuto: false,
      });
    }
  };

  return (
    <div className="App">
      {showConfetti && <Confetti />}
      <div className="birthday-card">
        <h1>🎉 Chúc Mừng Sinh Nhật! 🎂</h1>
        <h2>💌 Gửi đến một người rất đặc biệt 💌</h2>
        <button onClick={handleGiftClick}>Nhấn để mở quà 🎁</button>
      </div>
    </div>
  );
}

export default App;
