import React from 'react'

const Login = ({ setIsLoggedIn }: any) => {
    const handleLogout = async () => {
        try {
            let resp = await axios.delete('/users/sign_out')
            setIsLoggedIn(false)
        } catch (e) {
            console.log('There was some error on logout', e)
        }
    }
    return (
        <>
            <div className='bg-grey-lighter min-h-screen flex flex-col'>
                <div className='container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                        <h1 className='mb-8 text-3xl text-center font-medium'>Welcome to Dashboard</h1>
                        <p className='text-center mb-4'>It means your account is approved by admin</p>
                        <div>
                            <div className='flex w-1/2 mx-auto rounded border-grey-dark overflow-hidden'>
                                <button
                                    onClick={handleLogout}
                                    className='block w-full  text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4 font-sans tracking-wide uppercase font-bold'
                                >
                                    Logout
                                </button>
                                <div className='bg-blue-dark shadow-border p-3'>
                                    <div className='w-4 h-4'>
                                        <svg
                                            className='fill-current text-white'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path d='M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z' />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
