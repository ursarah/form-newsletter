import "./App.css"
import Form from "./components/Form/Form"

function App() {
  return (
    <div className='bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center'>
      <h1 className='font-bold text-[2rem] text-white'>Inscreva-se</h1>
      <p className='text-white'>Assine a news letter</p>
      <div className='w-96 mt-4 bg-stone-200 px-4 py-5'>
        <Form />
      </div>
      <p className='text-slate-100 text-xs w-96 mt-2 text-center'>
        ao se increver receberá dicas
      </p>
    </div>
  )
}

export default App
