import generatePdf from '../../utils/generatePdf';
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    const data = req.body;
      
    

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=generated-pdf.pdf');

        res.status(200).end(pdfBuffer, 'binary');
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ success: false, error: 'Error generating PDF' });
    }
}