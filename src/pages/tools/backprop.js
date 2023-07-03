import Intro from '../components/backpropagation/Intro';
import NNVisualizer from '../components/backpropagation/NNVisualizer';
import NavbarWithBanner from '../components/pageParts/NavbarWithBanner';
import Footer from '../components/pageParts/Footer';

function BackpropagationVisualizer() {
    return(<>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <Intro />
      <NNVisualizer />
      <Footer></Footer>
    </>)
}

export default BackpropagationVisualizer;