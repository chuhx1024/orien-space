export function goToHash (path, hash) {
    if (path !== window.location.pathname.slice(1)) {
        this.$router.push(path, () => {
            setTimeout(() => {
                window.scroll({
                    top: document.getElementById(hash).offsetTop - 66,
                    behavior: 'smooth',
                })
            }, 100)
        })
    } else {
        setTimeout(() => {
            window.scroll({
                top: document.getElementById(hash).offsetTop - 66,
                behavior: 'smooth',
            })
        }, 100)
    }
}
