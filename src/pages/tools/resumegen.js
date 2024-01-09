import NavbarWithBanner from '../../components/pageParts/NavbarWithBanner';
import Footer from '../../components/pageParts/Footer';
import Meta from '../../components/pageParts/Meta';
import ResumeGeneratorForm from '@/src/components/resumeGen/ResumeGeneratorForm';
import PDFTemplate from '@/src/components/resumeGen/PDFTemplate';


function ResumeGenerator() {
    /*
    return(<>
      <Meta siteTitle="Resume Generator" description="Resume generator I use to generate my resume"></Meta>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <ResumeGeneratorForm></ResumeGeneratorForm>
      <Footer></Footer>
    </>)
}

export default ResumeGenerator;