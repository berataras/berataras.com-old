import Link from "next/link";
import {BsFillMenuButtonWideFill, BsMenuApp} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {GrSun} from 'react-icons/gr';

function Header(){
    const [viewMenu, setViewMenu] = useState(false);
    const [status, setStatus] = useState(false);

    setTimeout(() => {
        setStatus(true)
    }, 300)

    const router = useRouter();
    const ro = router.pathname.split('/')
    const link = ro[1];

    const showMenu = () => setViewMenu(!viewMenu)

    const darkModeToggleHandle = () => {
        const html = document.querySelector('html');
       if (!html.classList.contains('dark-mode')){
           html.classList.add('dark-mode');
           html.classList.remove('light-mode');
           localStorage.setItem('mode', 'dark');
       }else{
           html.classList.add('light-mode');
           html.classList.remove('dark-mode');
           localStorage.setItem('mode', 'light');
       }
    }

    useEffect(() => {
        const html = document.querySelector('html');
        const hasMode = localStorage.getItem('mode');

        if (!hasMode){
            localStorage.setItem('mode', 'dark');
        }else if(hasMode === 'dark'){
            html.classList.add('dark-mode');
        }else if(hasMode === 'light'){
            html.classList.add('light-mode');
        }
    }, [])
    return(
        <header>
        <div className="container d-flex align-items-center justify-content-between">
            <ul>
                {status &&
                    <li onClick={() => showMenu()}>
                        {viewMenu ? <BsMenuApp size={20} />  : <BsFillMenuButtonWideFill size={20} /> }
                        {viewMenu === false ? <span className="ml-2">Göz At</span> : ''}
                    </li>
                }
                { viewMenu &&
                    <div className='menu'>
                        <li><Link href="/"><a className={link === '' ? 'active' : null}>Ben Kimim?</a></Link></li>
                        <li><Link href="/slap"><a className={link === 'slap' ? 'active' : null}>Slap</a></Link></li>
                        <li><Link href="/portfolio"><a className={link === 'portfolio' ? 'active' : null}>Portfolyo</a></Link></li>
                    </div>
                }
            </ul>

            <div className="d-flex">
                <GrSun size={30} onClick={darkModeToggleHandle} className="sunIcon" />
            </div>
        </div>
        </header>
    )
}

export default Header;
