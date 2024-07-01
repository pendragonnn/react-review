import React from 'react'

export default function FirstComponentButton({ classname='bg-black', text="My Button", onClick = () => {}, type="button" }) {
	
	return (
		<div>
			<button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type={type}
				onClick={onClick}
			> 
				{text}
			</button>
		</div>
	)
}
