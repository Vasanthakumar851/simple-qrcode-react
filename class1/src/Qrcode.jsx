import { useState } from "react";

const Qrcode = () => {
  const [img, setImg] = useState("");
  const [load, setLoad] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const [size, setSize] = useState("");

  async function generate() {
    setLoad(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${qrcode}`;
      setImg(url);
    } catch (error) {
      console.log("Generator Qr Code", error);
    } finally {
      setLoad(false);
    }
  }

  function downlode() {
    fetch(img)
      .then((values) => values.blob())
      .then((blob) => {
        const downlodeLink = document.createElement("a");
        downlodeLink.href = URL.createObjectURL(blob);
        downlodeLink.download = "QRCODE.png";
        document.body.appendChild(downlodeLink);
        downlodeLink.click();
      });
  }

  return (
    <div className="app-container">
      <h1>Qr Code Generated</h1>
      {img && <img src={img} alt="images add" className="img" />}
      {load && <p>Enter Your QrCode Value</p>}
      <div className="width">
        <label htmlFor="DataInput" className="input-label">
          Data For Qr Code:
        </label>
        <input
          type="text"
          id="DataInput"
          placeholder="Enter For Your Qr Code"
          value={qrcode}
          onChange={(e) => {
            setQrcode(e.target.value);
          }}
        />
        <label htmlFor="SizeInput" className="input-label">
          Images Size (e.g.,150:)
        </label>
        <input
          type="text"
          id="SizeInput"
          placeholder="Enter Image Size"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <div className="buttons">
          <button
            className="generate-button"
            onClick={generate}
            disabled={load}
          >
            Generate Qr Code
          </button>
          <button className="downlode-button" onClick={downlode}>
            Downlode Qr Code
          </button>
        </div>
      </div>
      <footer>
        <p>
          Designed By <span className="name">Vasanth</span>
        </p>
      </footer>
    </div>
  );
};

export default Qrcode;
