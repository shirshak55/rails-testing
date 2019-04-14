import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import '@/css/tailwind.css'
import './bootstrap'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'
import FlashMessage from '@/components/FlashMessage'

function App() {
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    let [loggedOutPath, setLoggedOutPath] = useState('')
    let [name, setName] = useState('')

    useEffect(() => {
        ;(async () => {
            try {
                const response = await axios.get('/login/status')
                const { status, name, logout_path } = response.data

                if (status === 'logged_in') {
                    setName(name)
                    setIsLoggedIn(true)
                }

                if (status === 'logged_out') {
                    setIsLoggedIn(false)
                    setLoggedOutPath(logout_path)
                }
            } catch (e) {
                setIsLoggedIn(false)
            }
        })()
    }, [])
    return (
        <>
            <div className='bg-grey-lighter min-h-screen flex flex-col'>
                <div className='container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                        <h1 className='mb-8 text-3xl text-center font-medium'>Welcome to Enliv Task</h1>
                        <FlashMessage />
                        {isLoggedIn && <Dashboard setIsLoggedIn={setIsLoggedIn} />}
                        {!isLoggedIn && <Home />}
                    </div>
                </div>
            </div>
        </>
    )
}

render(<App />, document.getElementById('app'))
