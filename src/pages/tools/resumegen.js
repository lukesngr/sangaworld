import NavbarWithBanner from '../../components/pageParts/NavbarWithBanner';
import Footer from '../../components/pageParts/Footer';
import Meta from '../../components/pageParts/Meta';
import ResumeGeneratorForm from '@/src/components/resumeGen/ResumeGeneratorForm';
import PDFTemplate from '@/src/components/resumeGen/PDFTemplate';


function ResumeGenerator() {
    let newProps = {professionalSummary: 'iouoiuoi',
      name: 'Luke Sanger',
      number: '0475868381',
      email: 'lukesngr@gmail.com',
      location: 'Heathcote',
      skills: 'React\nAWS',
      workExpTime: 'fdsfds',
      workExpLoc: 'dasd',
      workExpRole: 'dasdas',
      graduationDate: 'dasdas',
      degreeName: 'dsadas',
      university: 'dasdas'
    };

    return(<>
      <Meta siteTitle="Resume Generator" description="Resume generator I use to generate my resume"></Meta>
      <PDFTemplate {...newProps}></PDFTemplate>
    </>)
}

export default ResumeGenerator;