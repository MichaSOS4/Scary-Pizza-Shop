import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import React, { useState,useRef,createRef } from 'react'
import { ShoppingCart,Heart,MessageCircleQuestionMark,CircleUserRound,Pizza ,Search, Scale ,Menu ,PanelTopOpen, Pointer    } from 'lucide-react'
import MobileMenu from '../MobileMenu/MobileMenu'


function Navbar() {
const [scroll,setScroll] = useState(true)
const scrollMenu = useRef(null)
const mobileMenuFiled = useRef(null)
const pizzaWrap = useRef(null)
const navElement = useRef(null)

const showScrollWindow = ()=>{
    scrollMenu.current.style.display = 'flex'
    scrollMenu.current.addEventListener('mouseleave',()=>{
        scrollMenu.current.style.display = 'none'
    })
}
const changeNav = ()=>{
    const position = window.scrollY
    if(position){
        if(position>=50){
            setScroll(false)
        }else if(position <=50){
            setScroll(true)
        }
            
        
    }
    
}
const openMobileMenu = ()=>{
    if(mobileMenuFiled){
mobileMenuFiled.current.style.transform = 'translate(0,100%)'

    }else{
        console.log('nie ma')
    }

}

window.addEventListener('scroll',changeNav)




    return (
        <>
        <nav ref = {navElement}>
            <div className = {styles.topBar}>
            <div className={styles.logo}>
                <div className = {styles.logoText}>
                    <span>Scary</span><span>Pizza</span><span>Shop</span>
                </div>
                <div ref = {pizzaWrap} className = {styles.pizzaWrap}><Pizza className={styles.pizza} size={window.innerWidth<1024 ? 35 : 50} /></div>
                

            
            </div>
            
            <div className = {styles.searchingBar}>
                <input type="text" placeholder="Szukaj " />
                <Search className={styles.search} cursor={'pointer'} size={35} color='rgb(235, 129, 7)' />
            </div >
            {scroll  ? null:<div onClick={showScrollWindow} className={styles.scrollMenu}>

                <div ref={scrollMenu} className = {styles.scrollMenuWindow}>
                    <button className={styles.scrollHelp}><MessageCircleQuestionMark size={35} /></button>
                    <button className={styles.scrollFavourites}><Heart size={35}/></button>
                    <div className={styles.scrollMenuBtns}>
                    <button>Pizza</button>
                    <button>O nas</button>
                    <button>Odkryj własne kompozycje</button>
                    <button>Dostawa</button>
                </div>
                    <button className={styles.scrollLogin}>Zaloguj<CircleUserRound size={35} /></button>

                    
                </div>
                <PanelTopOpen size={35} color='rgb(235, 129, 7)' /></div> }
            <div className={styles.navBtns}>
               {scroll ?<button className={styles.login}>Zaloguj<CircleUserRound size={35} /></button> : null } 
           {scroll ?<button className={styles.help}><MessageCircleQuestionMark size={35} /></button> : null } 
            {scroll ?<button className={styles.favourites}><Heart size={35}/></button> : null }
            <button className={styles.basket}> <ShoppingCart size={35}/></button>
            </div>
            <button className={styles.normalMenuBar} onClick={openMobileMenu}><Menu size={30} color='red' />
            </button>
            
            <MobileMenu ref = {mobileMenuFiled}></MobileMenu>
            
            </div>
            {scroll ? <div className={styles.bottomBar}>
                <div className={styles.bottomBarButtons}>
                    <button>Pizza</button>
                    <button>O nas</button>
                    <button>Odkryj własne kompozycje</button>
                    <button>Dostawa</button>
                </div>
            </div> : null}

            
        </nav>
        </>
    )
}
  
export default Navbar
    