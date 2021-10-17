import Link from "next/link";
import {BsFillMenuButtonWideFill, BsMenuApp} from "react-icons/bs";
import {useState} from "react";
import {useRouter} from "next/router";

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

    return(
        <header>
        <div className="container">
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
        </div>
        </header>
    )
}

export default Header;