import React, { useContext, Fragment } from 'react';
import Link from 'next/link';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import AuthContext from '@/context/AuthContext';
import Search from './Search';
import styles from '@/styles/Header.module.css';

const Header = () => {
	const { user, logout } = useContext(AuthContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a>DJ Events</a>
				</Link>
			</div>

			<Search />

			<nav>
				<ul>
					<li>
						<Link href='/events'>
							<a>Events</a>
						</Link>
					</li>
					{user ? (
						// If the user is logged In
						<Fragment>
							<li>
								<Link href='/events/add'>
									<a>Add Event</a>
								</Link>
							</li>
							<li>
								<Link href='/account/dashboard'>
									<a>Dashboard</a>
								</Link>
							</li>
							<li>
								<button
									className='btn-secondary btn-icon'
									onClick={() => logout()}
								>
									<FaSignOutAlt /> Logout
								</button>
							</li>
						</Fragment>
					) : (
						// If the user logged Out
						<Fragment>
							<li>
								<Link href='/account/login'>
									<a className='btn-secondary btn-icon'>
										<FaSignInAlt /> Login
									</a>
								</Link>
							</li>
						</Fragment>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
