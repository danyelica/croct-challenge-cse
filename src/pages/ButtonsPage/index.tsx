import { useCroct } from "@croct/plug-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function ButtonsPage() {
  const croct = useCroct();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  function setPersona(newPersona) {
    croct.user.edit().set("custom.persona", newPersona).save(), [croct];

    localStorage.setItem("persona", newPersona);

    setMessage("Please refresh the page once you get there");
    return setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  return (
    <div className='container-buttons'>
      <div className='buttons'>
        <button onClick={() => setPersona(null)}>Other</button>
        <button onClick={() => setPersona("marketer")}>Marketer</button>
        <button onClick={() => setPersona("developer")}>Developer</button>
        <button onClick={() => setPersona("growth-hacker")}>
          Growth Hackers
        </button>
      </div>
      <div className='message'>{message && <strong>{message}</strong>}</div>
    </div>
  );
}
