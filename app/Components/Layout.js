import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main class="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
