import React from "react";

export const Header =(props) =>{
	return (
		<nav className="navbar navbar-default">
			<div className="container" >
				<div className="navbar-header" >
					<ul className="container" >
						<li><a href="#">{props.homeLink}</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

