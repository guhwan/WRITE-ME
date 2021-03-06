import React from 'react';
import {Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../actions';
import './Header.scss';
import {FaBars, FaUser } from "react-icons/all";
import img from '../../../public/logo.gif';

function Header() {
    const user = useSelector(state => state.authentication);
    const location = useLocation();
    return(
        <div className="header">
            <span className="menubar">
                <ul>
                    <li> <FaBars viewBox='50 30 448 512' size={32}/>
                        <ul>
                            <li><NavLink to="/category/politics" >정치</NavLink></li>
                            <li><NavLink to="/category/economy" >경제</NavLink></li>
                            <li><NavLink to="/category/society" >사회</NavLink></li>
                            <li><NavLink to="/category/world" >세계</NavLink></li>
                            <li><NavLink to="/category/science" >IT/과학</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </span>

            <span className="logo">
                {location.pathname !== "/" &&
                    <Link to="/"> <img src={img} className="logo_block" alt="WRITE ME"/> </Link>
                }
            </span>
            {localStorage.getItem('user') === null ?
                (
                    <div className="login_register">
                    <span className="login"> <Link to="/user/login"> 로그인 </Link> </span>
                    <span> | </span>
                    <span className="register"> <Link to="/user/register"> 회원가입 </Link> </span>
                    </div>
                )
                : (
                    <span className="user_menubar">
                        <ul>
                            <li> <span className="username"> <FaUser size="25" className="mr-2"/> {user.username} </span>
                                <ul>
                                    <li><NavLink to={`/post/@${user.username}`} > 나의 프로필 </NavLink></li>
                                    <li><NavLink to="/user/login" > 로그아웃 </NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                )
            }
        </div>
    );
}

export default Header;