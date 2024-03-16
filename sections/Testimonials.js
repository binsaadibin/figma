import ListWithOutUl from "@/components/ListWithOutUl";
import TestimonialsCards from "@/components/TestimonialsSlider/TestimonialsCards";
import styles from "@/styles/Sections/Testimonials.module.scss";
import Image from "next/image";


function Testimonials() {
  return (
    <div className={styles.testimonials}>
    <div className={styles.ListWithOutUl}>
        <ListWithOutUl item="Testimonials"/>
    </div>
      <h1>Hear from our satisfied customers</h1>

      <div className={styles.flexBox}>
        <div className={styles.boxOne}>
      <Image src="/svg_files/Image (2).svg" alt="Image (2).svg" height={50} width={50}/>
        </div>
        

        <div className={styles.boxTwo}>
            <h3><span>Perry Brill,</span> CEO SpexBot</h3>
            <p>"The team quickly understood our business requirements and were proactive and flexible with our ongoing support and developments. You can definitely trust them for complex project requirements as they are top-notch in their field and we can only recommend it."</p>
        </div>
        <div className={styles.testimonialsCards}>
            <TestimonialsCards/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
