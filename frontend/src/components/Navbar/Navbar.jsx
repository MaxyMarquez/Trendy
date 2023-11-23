import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BsBag, BsHeart, BsPerson, BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './styles.module.css';

const Navbar = () => {


    return (
        <>
            <a href="/home">Home</a>

        </>
    )
}

export default Navbar