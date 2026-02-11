import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-6 px-6 md:px-12 border-b border-slate-800/80">
        <h1 className="font-display font-semibold text-2xl md:text-3xl tracking-wide text-slate-100">
          Flight
        </h1>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-slate-100 mb-6 tracking-tight">
              Indoor Golf Center
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Where precision meets comfort. Experience golf year-round in a refined, climate-controlled environment.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-950/50 border-t border-slate-800/50">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-slate-100 mb-2 text-center">
              Get in Touch
            </h3>
            <p className="text-slate-500 text-center mb-12">
              Have a question or want to book? Send us a message.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="py-6 px-6 md:px-12 border-t border-slate-800/50">
        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Flight
        </p>
      </footer>
    </div>
  );
}

export default App;
