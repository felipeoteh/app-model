import { AiOutlineHeart } from 'react-icons/ai'
import style from './footer.module.css'

export default function Footer() {
    return (
    <footer>
        <div className={style.footer}>
            <p>
                <a href="https://lunnar.digital" target="_blank">
                    <span>Feito com</span>
                    <AiOutlineHeart />                 
                </a>
            </p>
        </div>
    </footer>
    )
}
