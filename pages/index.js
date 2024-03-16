// pages/index.js
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/sections/Main';
import styles from '@/styles/Home.module.scss';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Stacks from '@/sections/Stacks';
import Contact from '@/sections/Contact';
import Testimonials from '@/sections/Testimonials';

const Home = () => {
  return (
    <div className={styles.container} >
      <Header />
      <main>
        <section id="home">
         <Main/>
        </section>
        <section id="about">
        <About/>
        </section>
        <section id="services">
            <Services/>
        </section>
        <section id="stacks">
         <Stacks/>
        </section>
        <section id="projects">
        <Projects/>
        </section>
        <section id="testimonials">
         <Testimonials/>
        </section>
        <section id="contact">
         <Contact/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
