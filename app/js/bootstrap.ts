import axios from 'axios'

// Axios
;(<any>window).axios = axios

const getCSRFToken = () => {
    return (document.querySelector('meta[name=csrf-token]') as any).content
}
;(<any>window).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
;(<any>window).axios.defaults.headers.common['X-CSRF-TOKEN'] = getCSRFToken()
;(function() {
    'use strict'
    if (window.location && window.location.hash) {
        if (window.location.hash === '#_=_') {
            window.location.hash = ''
            return
        }
        var facebookFubarLoginHash = RegExp('_=_', 'g')
        window.location.hash = window.location.hash.replace(facebookFubarLoginHash, '')
    }
})()
