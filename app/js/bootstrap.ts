import axios from 'axios'
;(<any>window).axios = axios

const getCSRFToken = () => {
    return (document.querySelector('meta[name=csrf-token]') as any).content
}
;(<any>window).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
;(<any>window).axios.defaults.headers.common['X-CSRF-TOKEN'] = getCSRFToken()
