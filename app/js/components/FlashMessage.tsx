import React from 'react'

const FlashMessage = () => {
    const params = new URLSearchParams(window.location.search)
    const getMessage = params.get('message')
    return (
        <>
            {getMessage && (
                <div
                    className='bg-green-lightest border mb-4 border-green-light text-green-dark px-4 py-3 rounded relative'
                    role='alert'
                >
                    <span className='block sm:inline'>{getMessage}</span>
                </div>
            )}
        </>
    )
}

export default FlashMessage
