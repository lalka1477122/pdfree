"use client"
import { useState } from "react";
import Head from "next/head";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Image from "next/image"

export default function Page() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleDownloadPDF = () => {
    const docDefinition = {
      content: [
        { text: "PDF Report", style: "header" },
        { text: "PDF Report", style: "grey" },

      ],
      styles: {
        grey:{
          fontSize: 8,
          margin:[0,0,0,0]
        },

        header: {
          fontSize: 10,
          margin:[0,0,0,0]
        },
      },
    };

    pdfMake.createPdf(docDefinition).download("report.pdf");
  };

  return (
      <>
        <Head>
          <title>Generate PDF</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="container">
          <Image
              src="/asa-mitaka-asa.png"
              width={200}
              height={200}
              alt="Picture of the author"
          ></Image>
          <div className="select-group">
            <label htmlFor="selectOption1">Select Option 1:</label>
            <select
                id="selectOption1"
                value={selectedOption1}
                onChange={(e) => setSelectedOption1(e.target.value)}
            >
              <option value="">-- Please choose --</option>
              <option value="Option 1A">Option 1A</option>
              <option value="Option 1B">Option 1B</option>
              <option value="Option 1C">Option 1C</option>
            </select>
          </div>

          <div className="select-group">
            <label htmlFor="selectOption2">Select Option 2:</label>
            <select
                id="selectOption2"
                value={selectedOption2}
                onChange={(e) => setSelectedOption2(e.target.value)}
            >
              <option value="">-- Please choose --</option>
              <option value="Option 2A">Option 2A</option>
              <option value="Option 2B">Option 2B</option>
              <option value="Option 2C">Option 2C</option>
            </select>
          </div>

          <button onClick={handleDownloadPDF} className="download-button">
            Download PDF
          </button>
        </div>

        <style jsx>{`
        .container {
           display:grid;
           gap:40px;
          padding: 10px;
          font-family: Arial, sans-serif;
          max-width: 100vw;
        }
        h1 {
          font-size: 20px;
          text-align: center;
          margin-bottom: 20px;
        }
        .select-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        select {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .download-button {
          margin-top:70px; 
          width: 100%;
          padding: 12px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          text-align: center;
        }
        .download-button:hover {
          background-color: #005bb5;
        }
      `}</style>
      </>
  );
}
