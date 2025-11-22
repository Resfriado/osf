const PDFDocument = require("pdfkit");
const fs = require("fs");
const { PDFTable } = require("pdfkit-table");

async function createReport() {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("report.pdf"));

  await doc.table({
    title: "Users",
    headers: ["Name", "Age"],
    rows: [
      ["Alice", "22"],
      ["Bob", "31"],
    ]
  });

  doc.end();
}

createReport();
