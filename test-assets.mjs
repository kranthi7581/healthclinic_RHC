import http from 'http';

http.get('http://localhost:5173/images/gallery/2024-10-22.jpg', (res) => {
    console.log(`Port 5173: ${res.statusCode}`);
}).on('error', (e) => {
    console.error(`Error 5173: ${e.message}`);
});

http.get('http://localhost:5173/images/gallery/Screenshot%202026-03-04%20214323.png', (res) => {
    console.log(`Port 5173 (png): ${res.statusCode}`);
}).on('error', (e) => {
    console.error(`Error 5173 (png): ${e.message}`);
});
