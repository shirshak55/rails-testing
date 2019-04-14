import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import '@/css/tailwind.css'
import './bootstrap'
import Home from '@/components/Home'
import Dashboard from '@/components/Dashboard'

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
            {isLoggedIn && <Dashboard setIsLoggedIn={setIsLoggedIn} />}
            {!isLoggedIn && <Home />}
        </>
    )
}

render(<App />, document.getElementById('app'))
