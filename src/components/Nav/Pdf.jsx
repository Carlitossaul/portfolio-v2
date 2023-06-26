import React, { useEffect } from "react";
import resumePDF from "../../assets/resume.pdf";

export const Pdf = () => {
  useEffect(() => {
    if (typeof window.orientation !== "undefined") {
      document.getElementById("enlaceDescargarPdf").click();
      window.close();
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        marginTop: "8em",
      }}
    >
      <object
        data={resumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a
          href={resumePDF}
          id="enlaceDescargarPdf"
          download="resume.pdf"
          style={{ color: "#fd891c", textDecoration: "none", margin: "2px" }}
        >
          Tu dispositivo no puede visualizar los PDF, da click aqui para
          descargarlo
        </a>
      </object>
    </div>
  );
};

export default Pdf;
