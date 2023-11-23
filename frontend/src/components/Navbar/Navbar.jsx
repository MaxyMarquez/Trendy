import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BsBag, BsHeart, BsPerson, BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './styles.module.css';

const Navbar = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const favorites = useSelector(state => state.favorites);
    // const carrito = useSelector(state => state.carrito);


    const [show, setShow] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = (event) => {
        // event.preventDefault();
        // const queryParams = search ? `?nombre=${encodeURIComponent(search)}` : '';
        // const url = `/product_list/${queryParams}`;
        // setSearch(search);
        // navigate(url);
    };

    useEffect(() => {
        // const token = Cookies.get('token');
        // const userData = Cookies.get('user');

        // if (userData) {
        //     const parsedUser = JSON.parse(userData);
        //     localStorage.setItem('token', token);
        //     localStorage.setItem('id', parsedUser.id);
        //     localStorage.setItem('nombre', parsedUser.usuario);
        //     localStorage.setItem('nombre', parsedUser.carritos[0].id);
        // }

        const fetchUser = async () => {
            try {
                const { data } = await axios.get(`/usuarios/${localStorage.getItem('id')}`);
                setUser(data.data);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };

        fetchUser();
        // dispatch(getFavorites(localStorage.getItem('id')))
        // dispatch(getCarrito(localStorage.getItem('id')))

        // const params = new URLSearchParams(location.search);
        // setSearch(params.get('nombre') || search);
    }, []);

    return (
        <>
            <nav className={styles.nav_container}>
                <div className='container'>
                    <div className={styles.nav_header}>
                        <div className={styles.nav_logo}>
                            LOGO
                        </div>
                        <form className={styles.nav_search} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                                placeholder='Buscar...'
                            />
                            <button className={styles.btn_search} type='submit'><BsSearch /></button>
                        </form>
                        <div className={styles.nav_icons}>
                            {
                                localStorage.getItem('token')
                                    ? '<BtnLoggedIn name={user?.persona?.nombre} />'
                                    : <a className={styles.nav_login} to={''} onClick={() => setShow(!show)}>INICIAR SESI&#211;N</a>
                            }
                            <a
                                className={`${styles.nav_icon} ${styles.nav_menu}`} to={''}
                                onClick={() => setOpen(!open)}
                            >
                                <AiOutlineMenu />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.nav_links_container} ${open ? styles.open : styles.close}`}>
                        <div className={styles.nav_links}>
                            <a className={styles.nav_link} href={'/'}>Home</a>
                            <a className={styles.nav_link} href={'/product_list'}>Shop</a>
                            <a className={styles.nav_link} href={'/about_us'}>Sobre Nosotros</a>
                            <a className={styles.nav_link} href={''}>Contacto</a>
                            <a className={styles.nav_link} href={'/CreateProducts'}>Crear Producto</a>
                            s
                        </div>
                        <div className={styles.nav_icon_container}>
                            <div className={styles.fav_container}>
                                <a className={styles.nav_icon} to={''} onClick={() => setShowFavorites(!showFavorites)}>
                                    <BsHeart className={styles.icon} />
                                    <span className={styles.fav_count}>{'favorites.length'}</span>
                                </a>
                            </div>
                            <div className={styles.fav_container}>
                                <a className={styles.nav_icon} to={'/cart'}>
                                    <BsBag className={styles.icon} />
                                    <span className={styles.fav_count}>{'carrito[0]?.detalle_carritos.reduce((acc, item) => acc + parseInt(item.cantidad), 0)'}</span>
                                </a>
                                <span className={styles.total}>$ {'carrito[0]?.total'}</span>
                            </div>
                        </div>
                    </div>
                </div >
            </nav>
            {/* <Login show={show} toggleLogin={toggleLogin} />
            <Favorites show={showFavorites} toggleFavorites={toggleFavorites} /> */}
        </>
    )
}

export default Navbar