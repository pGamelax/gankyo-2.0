import SideBar from "@/components/sidebar/sidebar";

export default function LoginLayout({ children }) {
  return (
    <section className="flex flex-row">
      <SideBar />
      {children}
    </section>
  );
}
