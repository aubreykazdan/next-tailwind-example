import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
