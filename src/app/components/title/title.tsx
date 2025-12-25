import Image from "next/image";
import titleGirl from "./../../Public/images/titleGirl.png"
import titlestyles from './titlestyles.module.css'

export default function Title() {

    return (
        <div>
            <div className={titlestyles.title}>
                <div  className={titlestyles.titleText}>
                    <div className={titlestyles.titleTexth1}>MyPortfolio</div>
                    <div className={titlestyles.titleTexth4}>- SogoRei&apos;s Products -</div>
                </div>
                <Image src={titleGirl} alt="" className={titlestyles.titleimg}></Image>
            </div>
            <div  className={titlestyles.svgwave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 100" width="100%" className={titlestyles.svgwave}>
                <path d="M 1696 59 C 1376 59 1376 90 1056 90 C 736 90 736 41 416 41 C 96 41 96 84 -224 84 L 0 0 L 1280 0 Z" className={titlestyles.svgwavefill}></path>
                </svg>
            </div>
        </div>
      )
    }

