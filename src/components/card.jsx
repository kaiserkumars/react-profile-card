import Info from './info';
import About from './about';
import Interests from './interests';
import Footer from './footer';

export default function Card() {
    return (
        <div class="main-card">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
      
    )
}