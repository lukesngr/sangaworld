import Intro from '../components/forwardsnnn/Intro';
import NNVisualizer from '../components/forwardsnnn/NNVisualizer';
import NavbarWithBanner from '../components/pageParts/NavbarWithBanner';
import Footer from '../components/pageParts/Footer';

function ForwardNNVisualizer() {
    return (
    <>
      <NavbarWithBanner current={1}></NavbarWithBanner>
      <Intro />
      <NNVisualizer />
      <Footer></Footer>
    </>
    )
}

export default ForwardNNVisualizer;