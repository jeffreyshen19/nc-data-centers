// Get current signature count
fetch("https://higzlpikstkbhqcbaxgj.supabase.co/functions/v1/get-count")
    .then((res) => res.json())
    .then((res) => {

        if(res && res.count) {
            const el = document.querySelector('#sign .subtitle');
            el.textContent = `${res.count} people have signed the petition so far.`;
        }
    })

// Handle redirect 
const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);

function showToast(message) {
    Toastify({
        text: message,
        duration: 5000,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            'font-family': 'Helvetica'
        },
    }).showToast();
}

if(urlParams.get('signed')) {
    showToast("Successfully signed the petition!");
    window.history.pushState({}, document.title, window.location.pathname);
}

if(urlParams.get('endorsed')) {
    showToast("Successfully endorsed the petition!");
    window.history.pushState({}, document.title, window.location.pathname);
}