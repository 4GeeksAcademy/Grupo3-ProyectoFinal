import React, { Component } from "react";

export const Footer = () => (
	<footer className='text-center text-white'>

		<div className='text-center p-3' style={{ backgroundColor: 'rgba(77, 221, 173, 0.2)', color: 'black' }}>
			© {new Date().getFullYear()} Copyright:
			<a className='text-black'>
				FreeLancify.com
			</a>
		</div>
	</footer>
);