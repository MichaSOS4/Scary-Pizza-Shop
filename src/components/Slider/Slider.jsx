import styles from './Slider.module.css'
import { useRef ,useState,useEffect} from 'react'
import pizza1 from '../../images/pizza1.jpg'
import pizza2 from '../../images/pizza2.jpg'
import pizza3 from '../../images/pizza3.jpg'
import {ArrowRight,ArrowLeft  } from 'lucide-react'
function Slider(){

    const [counterSlide,setCounterSlide] = useState(0)
    
    const slideIsideSlide = useRef(null)
     
    

    
    const slides = [
        {
            title: 'Margarita',
            url: pizza1

        },
        {
            title: 'Fungi',
            url: pizza2

        },
        {
            title: 'Capriciosa',
            url: pizza3

        },
        {
            title: 'Ingleciana',
            url: pizza1

        },
        {
            title: 'Hawajska',
            url: pizza2

        },
        {
            title: 'Salami',
            url: pizza3

        },
        {
            title: 'Scary Monster',
            url: pizza1

        },
        {
            title: 'Meat Hedgegog',
            url: pizza2

        },
        {
            title: 'UltraCheese',
            url: pizza3

        },
    ]
    const changeSlideRight = ()=>{
        
    setCounterSlide(prevSlide => prevSlide += 1)
    if(counterSlide >= 2){
        setCounterSlide(0)
    }
    
    
        
        
        
        
    }
    const changeSlideLeft = ()=>{
        setCounterSlide(prevSlide => prevSlide -= 1)
    if(counterSlide <= 0){
        setCounterSlide(2)
    }
        
        
        
    }
    useEffect(()=>{
        
        switch(counterSlide){
            case 1: slideIsideSlide.current.style.left = `calc(-100%)`;
            break;
            case 2: slideIsideSlide.current.style.left = `-200%`;
            break;
            case 0:slideIsideSlide.current.style.left = `0`;
            break;
            




        }
        
        


    },[counterSlide])



return(
    <div className = {styles.sliderWrap}>
        <h1 className = {styles.sliderTitle}>Najczęściej wybierane pozycje</h1>

        <div className = {styles.sliderBar}>
        <span onClick={changeSlideLeft}><ArrowLeft color='rgb(235, 129, 7)' /></span>
        <div className = {styles.slides}>
            <div ref={slideIsideSlide} className={styles.slidesInside}>

                {slides.map((slide,idx)=>{
                
                
                return (
                    <div style={{backgroundImage : `url('${slide.url}')` }}  key={idx} className = {styles.singleSlide}>
                        <h4>{slide.title}</h4>
                        
                    </div>
                )
            })}
            </div>
            

        </div>
        <span onClick={changeSlideRight}><ArrowRight color='rgb(235, 129, 7)' /></span>
        </div>



    </div>
)
}
export default Slider