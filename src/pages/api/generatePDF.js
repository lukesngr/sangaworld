import puppeteer from 'puppeteer';
import PDFTemplate from '@/src/components/resumeGen/PDFTemplate';
import { renderToStaticMarkup } from 'react-dom/server';

export default async function handler(req, res) {

    try {
        let htmlContent = renderToStaticMarkup(<PDFTemplate {...req.query}></PDFTemplate>);
        const browser = await puppeteer.launch({headless: "false"});
        const page = await browser.newPage();
        await page.setViewport({
            width: 702,
            height: 993,
            deviceScaleFactor: 1,
        })
        await page.setContent(htmlContent, { waitUntil: 'load' });
        const contentToDEbug = await page.content();
        console.log(contentToDEbug);
        const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true, scale: 2 });
        await browser.close();

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=generated-pdf.pdf');

        res.status(200).end(pdfBuffer, 'binary');
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ success: false, error: 'Error generating PDF' });
    }
}