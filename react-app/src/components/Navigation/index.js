import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/yap-logo.png'

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul id ="header">
			<li>
				<NavLink exact to="/">

				<img id="logo-image" src= {logo}alt="Logo"/>
				</NavLink>
			</li>
			{/* <i id='info-header'> <p>Find me on:</p>
			<a className="fa-brands fa-square-github" href="https://github.com/EhabZak"></a>
			<a className="fa-brands fa-linkedin" href=" https://www.linkedin.com/in/zak-alashqar/"></a>
				 </i> */}
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
