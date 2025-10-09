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
        if(window.innerWidth > 1024){
            setCounterSlide(prevSlide => prevSlide += 1)
            if(counterSlide >= 2){
                setCounterSlide(0)
            }
        }
        if(window.innerWidth < 1024){
                setCounterSlide(prevSlide => prevSlide += 1)
                 if(counterSlide >= 8){
                setCounterSlide(0)
            }

        }
    
    
    
        
        
        
        
    }
    const changeSlideLeft = ()=>{
        if(window.innerWidth > 1024){
        setCounterSlide(prevSlide => prevSlide -= 1)
    if(counterSlide <= 0){
        setCounterSlide(2)
    }
    
}  
        if(window.innerWidth < 1024){
        setCounterSlide(prevSlide => prevSlide -= 1)
        if(counterSlide <= 0){
        setCounterSlide(8)
                     }
                        }
    }
    useEffect(()=>{
        
        switch(counterSlide){
            case 1: if(window.innerWidth > 1024){
                 slideIsideSlide.current.style.left = `calc(-100%)`;
            }else if(window.innerWidth < 1024){
                slideIsideSlide.current.style.left = `calc(-100% - 40px)`;
            }
            break;
            case 2: if(window.innerWidth > 1024){
                 slideIsideSlide.current.style.left = `calc(-200%)`;
            }else if(window.innerWidth < 1024){
                slideIsideSlide.current.style.left = `calc(-200% - 40px)`;
            }
            break;
            case 0:slideIsideSlide.current.style.left = `0`;
            break;
            case 3:slideIsideSlide.current.style.left = `calc(-300% - 60px)`;
            break;
            case 4:slideIsideSlide.current.style.left = `calc(-400% - 80px)`;
            break;
            case 5:slideIsideSlide.current.style.left = `calc(-500% - 100px)`;
            break;
            case 6:slideIsideSlide.current.style.left = `calc(-600% - 120px)`;
            break;
            case 7:slideIsideSlide.current.style.left = `calc(-700% - 140px)`;
            break;
            case 8:slideIsideSlide.current.style.left = `calc(-800% - 160px)`;
            break;
            




        }
        
        


    },[counterSlide])
    window.addEventListener('resize',()=>{
        setCounterSlide(0)
    })



return(
    <div className = {styles.sliderWrap}>
        <h1 className = {styles.sliderTitle}>Najczęściej wybierane pozycje</h1>

        <div className = {styles.sliderBar}>
        <span className = {styles.left} onClick={changeSlideLeft}><ArrowLeft color='rgb(235, 129, 7)' /></span>
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
        <span className = {styles.right} onClick={changeSlideRight}><ArrowRight color='rgb(235, 129, 7)' /></span>
        </div>



    </div>
)
}
export default Slider