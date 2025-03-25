/* 
Component Composition is a design pattern in React where small, reusable components are combined to build more complex UIs.

✅ Reusability – Breaks UI into smaller, manageable pieces
✅ Maintainability – Easier to read and update
✅ Flexibility – Allows passing different content (props, children)
✅ Scalability – Works well for large applications  
*/

const Header = () => <h1>Welcome to My App</h1>;
const Footer = () => <footer>© 2025 MyApp</footer>;

const Layout = () => {
  return (
    <div>
      <Header />
      <p>Main content goes here...</p>
      <Footer />
    </div>
  );
};
