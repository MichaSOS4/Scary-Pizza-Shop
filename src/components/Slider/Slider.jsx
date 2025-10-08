import styles from './Slider.module.css'


function Slider(){

    const slides = [
        {
            title: 'Margarita',
            url:''

        },
        {
            title: 'Fungi',
            url:''

        },
        {
            title: 'Capriciosa',
            url:''

        },
        {
            title: 'Ingleciana',
            url:''

        },
        {
            title: 'Hawajska',
            url:''

        },
        {
            title: 'Salami',
            url:''

        },
        {
            title: 'Scary Monster',
            url:''

        },
        {
            title: 'Meat Hedgegog',
            url:''

        },
        {
            title: 'UltraCheese',
            url:''

        },
    ]


return(
    <div className = {styles.sliderWrap}>
        <h1 className = {styles.sliderTitle}>Najczęściej wybierane pozycje</h1>

        <div className = {styles.sliderBar}>
        <span>left</span>
        <div className = {styles.slides}>


        </div>
        <span>right</span>
        </div>



    </div>
)
}
export default Slider