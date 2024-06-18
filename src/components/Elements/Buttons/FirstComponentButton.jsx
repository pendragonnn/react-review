import React from 'react'

export default function FirstComponentButton({ classname='bg-black', text="My Button" }) {
	
	return (
		<div>
			<button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type='submit'> 
				{text}
			</button>
		</div>
	)
}
