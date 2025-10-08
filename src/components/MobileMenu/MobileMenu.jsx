 import styles from './MobileMenu.module.css'
 import { forwardRef, useRef } from 'react'
 import { ShoppingCart,Heart,MessageCircleQuestionMark,CircleUserRound,Pizza ,Search,X , Scale ,Menu ,PanelTopOpen, Pointer    } from 'lucide-react'

   const MobileMenu =  forwardRef(     ( props, ref )=>{


    const closeMenu = ()=>{
        ref.current.style.transform = 'translate(100%,100%)'
    }


    return(
        <div ref={ref} className = {styles.mobileMenu}>
            <div className = {styles.x}><X color='red' size={40} onClick={closeMenu}/></div>
            
            <div className = {styles.searchingBar}>
                <input type="text" placeholder="Szukaj " />
                <Search cursor={'pointer'} size={35} color='rgb(235, 129, 7)' />
            </div >
             <div className={styles.navBtns}>
                 <button className={styles.login}>Zaloguj<CircleUserRound size={35} /></button>  
                 <button className={styles.help}> Pomoc<MessageCircleQuestionMark size={35} /></button> 
                 <button className={styles.favourites}>Ulubione<Heart size={35}/></button>
             </div>

             <div className={styles.bottomBarButtons}>
                                 <button>Pizza</button>
                                 <button>O nas</button>
                                 <button>Odkryj własne kompozycje</button>
                                 <button>Dostawa</button>
             </div>


        </div>
    )
}
)
export default MobileMenu