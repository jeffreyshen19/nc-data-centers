fetch("https://higzlpikstkbhqcbaxgj.supabase.co/functions/v1/get-count")
    .then((res) => res.json())
    .then((res) => {

        if(res && res.count) {
            const el = document.querySelector('#sign .subtitle');
            el.textContent = `${res.count} people have signed the petition so far.`;
        }
    })