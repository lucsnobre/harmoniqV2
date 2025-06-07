export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} HarmoniQ. Todos os direitos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Desenvolvido com <span className="font-semibold text-primary">Next.js</span> e <span className="font-semibold text-primary">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
