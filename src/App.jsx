import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import './index.css'

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
				<LoginPage />
				<RegisterPage />
			</div>
		</>
	)
}

export default App
