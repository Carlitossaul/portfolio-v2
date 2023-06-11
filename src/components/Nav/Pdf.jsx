import React, { useEffect } from "react";

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
        data={require("../../helper/CV-carlos-lovey.pdf")}
        type="application/pdf"
        width="100%"
        height="100% "
      >
        <br />
        <a
          href={require("../../helper/CV-carlos-lovey.pdf")}
          id="enlaceDescargarPdf"
          download="Curriculum vitae.pdf"
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
