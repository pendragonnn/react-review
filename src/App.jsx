import './index.css'
import MyFirstComponentButton from './components/Elements/Buttons/FirstComponentButton'

function App() {
	// const dataDummy = [
	// 	{ id: 1, text: "login", variant:"bg-red-700"},
	// 	{ id: 2, text: "logout", variant:"bg-slate-700"},
	// 	{ id: 3, text: "register", variant:"bg-yellow-700"}
	// ]

	return (
		<>
			<div className='flex justify-center items-center min-h-screen'>
				{/* Component and Props
				<div className='flex gap-x-2'>
					{dataDummy.map(data => (
						<MyFirstComponentButton key={data.id} text={data.text} variant={data.variant} />
					))}

				</div> */}
				<div className='w-full max-w-xs'>
					<h1 className='text-blue-600 text-3xl font-bold mb-2'>Login</h1>
					<p className='font-medium text-slate-500 mb-8'>
						Welcome, Please enter your details
					</p>
					<form action="">
						<div className='mb-6'>
							<label htmlFor="email" className='block text-slate-700 text-sm font-bold mb-2'>Email</label>
							<input type="email" className='text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50' placeholder='example@mail.com' />
						</div>
						<div className='mb-6'>
							<label htmlFor="password" className='block text-slate-700 text-sm font-bold mb-2'>Password</label>
							<input type="password" className='text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50' placeholder='*****' />
						</div>
						<MyFirstComponentButton classname='bg-blue-600 w-full' text='Login'>
							Login
						</MyFirstComponentButton>
					</form>
				</div>
			</div>
		</>
	)
}

export default App
