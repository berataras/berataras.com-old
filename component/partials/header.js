import Link from "next/link";
import {FiAlignJustify} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function Header(){
    const [viewMenu, setViewMenu] = useState(false);
    const router = useRouter();
    const ro = router.pathname.split('/')
    const link = ro[1];
    console.log(link)
    const showMenu = () => {
        setViewMenu(true)
        setTimeout(() => {
            setViewMenu(false)
        }, 3000)
    }
    return(
        <header>
        <div className="container">
            <ul>
                <li onClick={() => showMenu()}><FiAlignJustify size={30} /> {viewMenu === false ? <span>Göz At</span> : ''}</li>
                { viewMenu &&
                    <div className='menu'>
                        <li><Link href="/about"><a className={link === 'about' ? 'active' : null}>Ben Kimim?</a></Link></li>
                        <li><Link href="/services"><a className={link === 'services' ? 'active' : null}>Hizmetlerim</a></Link></li>
                        <li><Link href="/portfolio"><a className={link === 'portfolio' ? 'active' : null}>Portfolyo</a></Link></li>
                    </div>
                }
            </ul>
        </div>
            <style jsx>{`
                header{
                  height: 15vh;
                  color: white;
                  display: flex;
                  align-items: center;
                }
                header ul {
                    display: flex;
                    align-items: center;
                    border-bottom-right-radius: 20px;
                    border-top-right-radius: 20px;
                }
                ul .menu {
                 display: flex;
                 align-items: center;
                }
                ul li {
                  padding: 0;
                  line-height: 0;
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                }
                ul li span {
                  padding-left: 5px;
                }
                ul .menu li:first-child{
                  padding-left: 10px;
                }
                ul .menu li:not(:first-child){
                  padding-left: 20px;
                }
               a {
                  color: #F44158;
                  font-size: 18px;
                }
                .active{
                  color: #0C9A9A;
                  display: unset;
                }
                
            `}</style>
        </header>
    )
}

export default Header;