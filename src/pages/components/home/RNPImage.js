import Image from "next/image";
import '../../../styles/rnpimage.css'

function RNPImage() {
    return (
        <div className="imageContainer">
            <Image src="/rnpimage.jpg" width={1000} height={700} alt="Picture of website" className="RNPImage"/>
            <div className="overlayedText">Big Things Coming Soon</div>
        </div>
    )
}

export default RNPImage;