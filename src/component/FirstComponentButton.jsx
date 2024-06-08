import React from 'react'

export default function FirstComponentButton({ variant='bg-black', text="My Button" }) {
	
	return (
		<div>
			<button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type='submit'> 
				{text}
			</button>
		</div>
	)
}
