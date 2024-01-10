import NavbarWithBanner from '../../components/pageParts/NavbarWithBanner';
import Footer from '../../components/pageParts/Footer';
import Meta from '../../components/pageParts/Meta';
import ResumeGeneratorForm from '@/src/components/resumeGen/ResumeGeneratorForm';
import PDFTemplate from '@/src/components/resumeGen/PDFTemplate';


function ResumeGenerator() {
    let testProps = {
      professionalSummary: 'gfdgfd',
      name: 'Luke Sanger',
      number: '0477819893',
      email: 'lukesngr@gmail.com',
      location: 'Heathcote, NSW, Sydney 2233',
      skills: 'gfdg',
      workExpTime: 'gdfgfd',
      workExpLoc: 'gdfgfd',
      workExpRole: 'gfdgfd',
      graduationDate: 'gdfgdf',
      degreeName: 'gdfg',
      university: 'gdffdg',
      certifications: 'gdfgfd',
      workExpDotpoints: 'gfdgfd'
    };
    return(<>
      {/*<Meta siteTitle="Resume Generator" description="Resume generator I use to generate my resume"></Meta>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <ResumeGeneratorForm></ResumeGeneratorForm>
    <Footer></Footer>*/}
      <PDFTemplate {...testProps}></PDFTemplate>
    </>)
}

export default ResumeGenerator;