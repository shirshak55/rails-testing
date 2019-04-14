import React from 'react'

const Home = () => {
    const handleLoginWithFacebook = () => {
        try {
            ;(window as any).location = '/users/auth/facebook'
        } catch (e) {
            console.log('Error while loggin in', e)
        }
    }
    return (
        <>
            <div>
                <div className='flex w-1/2 mx-auto rounded border-grey-dark overflow-hidden'>
                    <button
                        onClick={handleLoginWithFacebook}
                        className='block w-full  text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4 font-sans tracking-wide uppercase font-bold'
                    >
                        Login With Facebook
                    </button>
                    <div className='bg-blue-dark shadow-border p-3'>
                        <div className='w-4 h-4'>
                            <svg
                                className='fill-current text-white'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
