import Image from "next/image";

import product4img from "./../../Public/images/Portfolio.png"
import productstyles from "./products.module.css"

export default function Product4() {

    return (
        <div>
           <div className={productstyles.productback}>
                <div className={productstyles.productitem4}>
                    <Image src={product4img} alt="" className={productstyles.productimg}></Image>
                        <div className={productstyles.producttext}>
                            <div className={productstyles.producticons}>
                                <div className={productstyles.productkozin}>個人</div>
                                <div className={productstyles.producttype}>#webサイト</div>
                        </div>
                            <div className={productstyles.producttitle}>ポートフォリオサイト「MyPortfolio」</div>
                            <div className={productstyles.productcoment}>手がけたアイデアが形になった宝物を、この場所に。</div>
                            <div className={productstyles.productskil}>ver01.HTML/JavaScript(jQuery)/CSS</div>
                            <div className={productstyles.productskil}>ver02.Typescript(Next.js)/JavaScript/CSS</div>
                            <div className={productstyles.productbutton}>
                                <a href='./products/product1.html' ><span>詳しくみる⇀</span></a>
                            </div>
                        </div>
                </div>
            </div>
            

        </div>
      )
    }

