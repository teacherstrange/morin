export default function Layout({ children, className = '' }) {
  return (
    <main
      className={`min-h-screen font-default font-medium flex w-full flex-col items-center justify-between ${className}`}
    >
      {children}
    </main>
  );
}
