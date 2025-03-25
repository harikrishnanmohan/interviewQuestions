// Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR) in React

/* 
A typical React SPA (Single Page Application) using CSR:
✅ Pros of CSR
✔ Fast subsequent navigation (once the app loads, it feels instant)
✔ Better user experience (smooth transitions, no full-page reloads)
✔ Efficient for web applications (e.g., dashboards, social media)

❌ Cons of CSR
✖ Slower initial load time (JavaScript must be fetched and executed)
✖ Bad for SEO (Search engines struggle with empty HTML)
✖ Not ideal for slow network connections
*/

/* 
In Server-Side Rendering, the server processes and renders the React component before sending the full HTML page to the browser.

📌 How It Works (Step by Step)
The browser requests a page from the server.
The server runs React on the backend and generates a fully rendered HTML page.
The user sees content instantly, but React still hydrates the page for interactivity.

✔ Fast initial page load (pre-rendered HTML loads instantly)
✔ Great for SEO (search engines can crawl the HTML content)
✔ Works well for content-heavy websites (e.g., blogs, news sites)

❌ Cons of SSR
✖ Slower navigation (each request goes to the server)
✖ More server load (each request triggers re-rendering)
✖ More complex setup (requires a backend or Next.js)
*/

/* 

*/
