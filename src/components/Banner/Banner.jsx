import styles from './Banner.module.css'
import { useRef } from 'react'
function Banner (){
    const firstTitle = useRef(null)
    const secondTitle = useRef(null)
    
    const changeTitle = ()=>{
    //     if(window.innerWidth > 1024){
    //     if(window.scrollY >= 60){
    //         firstTitle.current.style.transform = 'scale(0)'
            
    //         secondTitle.current.style.transform = 'scale(0)'
            
            
    //     }else if(window.scrollY <60 ||window.scrollY == 0 ){
    //         firstTitle.current.style.transform = 'scale(1)'
    //         secondTitle.current.style.transform = 'scale(1)'
    //     }
    // }

        firstTitle.current.style.left = ` -${window.scrollY*2}px`
        secondTitle.current.style.right = ` -${window.scrollY*2}px`


    }



window.addEventListener('scroll',changeTitle)

    return(
        <div className = {styles.banner}>
            <div className = {styles.back}></div>
            
                
            <h1 ref={firstTitle} className = {styles.bannerTitle}>Don't think to much,
                  </h1>
                <h1 ref={secondTitle} className = {styles.bannerTitleTwo}>
                Just try it   </h1>
            
            

        </div>
    )
}
export default Banner