import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

import "jspdf-autotable";

const CbcPDF = ({ patient }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [cbcTestData, setCbcTestData] = useState(null);
  const [urineTestData, setUrineTestData] = useState(null);
  console.log(patient);
  const generatePDF = () => {
    setButtonClicked(true);

    const cbcdata = patient.tests.find(
      (test) => test.testType === "CBC"
    )?.testData;
    setCbcTestData(cbcdata);

    const urinedata = patient.tests.find(
      (test) => test.testType === "Urine"
    )?.testData;
    setUrineTestData(urinedata);
    console.log(urinedata);
  };

 useEffect(() => {
  if (buttonClicked) {
    // Perform PDF generation logic here
    const doc = new jsPDF({
      orientation: "portrait",
    });

    const fontUrl =
      "https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap";
    const fontName = "RobotoSlab";
    const linkElement = document.querySelector('link[rel="stylesheet"][href^="https://fonts.googleapis.com/css2"]');
    const fontFamily = linkElement.getAttribute("href").split("family=")[1].split(":")[0];

    doc.addFont(fontUrl, fontFamily, "normal");
    doc.setFont(fontFamily);

    if (cbcTestData && cbcTestData.Hb) {
      doc.addImage("/background-header.jpg", "JPEG", 2, 2, 206, 25);
      // Draw a rectangle as a box
      doc.roundedRect(5, 29, 200, 32, 2, 2); // (x, y, width, height)

      // Add text fields inside the box
      doc.setFontSize(14);
      doc.text(`Sr.No.: ${patient.serial}`, 10, 36);
      doc.text(`Name: ${patient.name}`, 10, 43);
      doc.text(`Age/Gender: ${patient.age} years / ${patient.gender}`, 10, 50);
      doc.text(`Ref. By: ${patient.refBy}`, 10, 57);
      doc.text(
        `Date: ${new Date(patient.date).toLocaleDateString("en-GB")}`,
        155,
        36
      );
      const formattedTime = new Date(
        `2022-02-07T${patient.time}:00`
      ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      doc.text(`Time: ${formattedTime}`, 155, 43);

      doc.setFontSize(15);
      doc.text("HAEMOGRAM", 90, 70);

      // Generate PDF using autoTable and the HTML table
      doc.autoTable({
        html: "#cbc-table",
        startX: 10, // Adjust the X-axis start position
        startY: 74,
        theme: "striped",

        columnStyles: {
          0: { cellWidth: 65 },
          1: { cellWidth: 32 },
          2: { cellWidth: 32 },
          3: { cellWidth: 53 },
        },
        styles: {
          fontSize: 12, // Set font size
          cellPadding: 1, // Set cell padding
          halign: "center",
          valign: "middle",
          minCellHeight: 9,
        },
        didParseCell: (hookData) => {
          // Add a custom class to the cells of specific rows in the body
          if (
            (hookData.row.index === 0 ||
              hookData.row.index === 4 ||
              hookData.row.index === 17 ||
              hookData.row.index === 19) &&
            !hookData.head
          ) {
            hookData.cell.styles.halign = "left";
            hookData.cell.styles.fontStyle = "bold";
            hookData.cell.styles.cellPadding = 2;
          }
        },
      });
      doc.setFontSize(9);
      doc.text(
        "By immunoturbidimetry :: HAEMOGRAM Test done by Transasia Erba H360 Fully Automatic 22 parameter cell counter",
        15,
        283
      );
    }

    if (urineTestData && urineTestData.quantity) {
      if (cbcTestData) {
        doc.addPage();
      }
      if(!cbcTestData.Hb){
        doc.deletePage(1)
      }
      doc.text("Urine Analysis", 90, 66);

      // Generate PDF using autoTable and the HTML table
      doc.autoTable({
        html: "#urine-table",
        startY: 70,
        columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: 60 } },
      });
    }

    // Convert the PDF to a Blob
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open the PDF in a new window
    window.open(pdfUrl, "_blank");
    setButtonClicked(false);
    setCbcTestData(null);
    setUrineTestData(null);
  }
}, [buttonClicked, cbcTestData, urineTestData]);

  
  

  return (
    <div>
      <button type="button" onClick={generatePDF}>
        Generate PDF
      </button>

      <>
        {buttonClicked && cbcTestData && (
          <table className="hidden" id="cbc-table">
            <thead>
              <tr>
                {/* header cells written exclusively in the jsPDF block  */}
                <th>Test</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Normal Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BLOOD COUNT</td>
              </tr>
              <tr>
                <td>HAEMOGLOBIN</td>
                <td>{cbcTestData.Hb || "--"}</td>
                <td>gms %</td>
                <td>{cbcTestData.HbNv || "--"}</td>
              </tr>
              <tr>
                <td>Total R.B.C</td>
                <td>{cbcTestData.RBC}</td>
                <td>millions /cmm</td>
                <td>{cbcTestData.RBCnv || "--"}</td>
              </tr>
              <tr>
                <td>Total W.B.C</td>
                <td>{cbcTestData.WBC || "--"}</td>
                <td>/cmm</td>
                <td>{cbcTestData.WBCnv}</td>
              </tr>
              <tr>
                <td>DIFFERENTIAL LEUCOCYTE COUNT</td>
              </tr>
              <tr>
                <td>NEUTROPHILS</td>
                <td>{cbcTestData.neutrophils}</td>
                <td>%</td>
                <td>{cbcTestData.NeutroNv}</td>
              </tr>
              <tr>
                <td>LYMPHOCYTES</td>
                <td>{cbcTestData.lymphocytes}</td>
                <td>%</td>
                <td>{cbcTestData.Lymphonv}</td>
              </tr>
              <tr>
                <td>EOSINOPHILS</td>
                <td>{cbcTestData.eosinophils}</td>
                <td>%</td>
                <td>{cbcTestData.EosNv}</td>
              </tr>
              <tr>
                <td>MONOCYTES</td>
                <td>{cbcTestData.monocytes}</td>
                <td>%</td>
                <td>{cbcTestData.MonoNv}</td>
              </tr>
              <tr>
                <td>BASOPHILS</td>
                <td>{cbcTestData.basophils}</td>
                <td>%</td>
                <td>{cbcTestData.BasoNv}</td>
              </tr>
              <tr>
                <td>BLOOD INDICES</td>
              </tr>
              <tr>
                <td>P.C.V (H.C.T.)</td>
                <td>{cbcTestData.pcv}</td>
                <td>%</td>
                <td>{cbcTestData.PcvNv}</td>
              </tr>
              <tr>
                <td>M.C.V</td>
                <td>{cbcTestData.mcv}</td>
                <td>fl</td>
                <td>{cbcTestData.McvNv}</td>
              </tr>
              <tr>
                <td>M.C.H</td>
                <td>{cbcTestData.mch}</td>
                <td>picogram</td>
                <td>{cbcTestData.MchNv}</td>
              </tr>
              <tr>
                <td>M.C.H.C</td>
                <td>{cbcTestData.mchc}</td>
                <td>gm/dL</td>
                <td>{cbcTestData.MchcNv}</td>
              </tr>
              <tr>
                <td>R.D.W</td>
                <td>{cbcTestData.rdw}</td>
                <td>%</td>
                <td>{cbcTestData.RdwNv}</td>
              </tr>
              <tr>
                <td>PLATELET COUNT</td>
                <td>{cbcTestData.platelets}</td>
                <td>/ cmm</td>
                <td>{cbcTestData.PlatNv}</td>
              </tr>
              <tr>
                <td>SMEAR STUDY</td>
              </tr>
              <tr>
                <td>BLOOD MP</td>
                <td>{cbcTestData.mp}</td>
              </tr>
              <tr>
                <td>SEROLOGY TEST</td>
              </tr>
              <tr>
                <td>C- REACTIVE PROTEIN</td>
                <td>{cbcTestData.serology}</td>
                <td>mg / l</td>
                <td>{cbcTestData.SeroNv}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* urine table */}
        {buttonClicked && urineTestData && (
          <table className="hidden" id="urine-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Normal Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PHYSICAL</td>
              </tr>
              <tr>
                <td>QUANTITY</td>
                <td>
                  <td>
                    {urineTestData && urineTestData.quantity
                      ? urineTestData.quantity
                      : ""}
                  </td>
                </td>
                <td>cc</td>
              </tr>
              <tr>
                <td>COLOUR</td>
                <td>{urineTestData.urineColor}</td>
              </tr>
              <tr>
                <td>CLARITY</td>
                <td>{urineTestData.clarity}</td>
              </tr>
              <tr>
                <td>REACTION PH</td>
                <td>{urineTestData.urineph}</td>
                <td>{/*blank*/}</td>
                <td>{urineTestData.phNv}</td>
              </tr>
              <tr>
                <td>SP GRAVITY</td>
                <td>{urineTestData.spgr}</td>
                <td>{/*blank*/}</td>
                <td>{urineTestData.spgrNv}</td>
              </tr>
              <tr>
                <td>CHEMICAL</td>
              </tr>
              <tr>
                <td>ALBUMIN</td>
                <td>{urineTestData.albumin}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>SUGAR</td>
                <td>{urineTestData.sugar}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>BILE SALTS</td>
                <td>{urineTestData.bilesalts}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>BILE PIGMENTS</td>
                <td>{urineTestData.bilepigments}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>UROBILINOGEN</td>
                <td>{urineTestData.urobilinogen}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>BLOOD</td>
                <td>{urineTestData.urineblood}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>ACETONE</td>
                <td>{urineTestData.acetone}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>LEUCOCYTES</td>
                <td>{urineTestData.leucocytes}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>
              <tr>
                <td>NITRITE</td>
                <td>{urineTestData.nitrite}</td>
                <td>{/*blank*/}</td>
                <td>{/*blank*/}</td>
              </tr>

              <tr>
                <td>
                  MICROSCOPIC ( 10 CC URINE IS CENTRIFUSED FOR 5 MIN. AT 3000
                  RPM )
                </td>
              </tr>
              <tr>
                <td>PUS CELLS</td>
                <td>{urineTestData.puscells}</td>
                <td>/HPF</td>
              </tr>
              <tr>
                <td>RED CELLS</td>
                <td>{urineTestData.redcells}</td>
              </tr>
              <tr>
                <td>EPITHELIAL CELLS</td>
                <td>{urineTestData.epithelialcells}</td>
                <td>/HPF</td>
              </tr>
              <tr>
                <td>CASTS</td>
                <td>{urineTestData.casts}</td>
              </tr>
              <tr>
                <td>CRYSTALS</td>
                <td>{urineTestData.crystals}</td>
              </tr>
              <tr>
                <td>AMORRPHOUS</td>
                <td>{urineTestData.amorphous}</td>
              </tr>
              <tr>
                <td>BACTERIA</td>
                <td>{urineTestData.bacteria}</td>
              </tr>
            </tbody>
          </table>
        )}
      </>
    </div>
  );
};

export default CbcPDF;
