/**
 * App
 * 
 * Root layout containing navigation and page sections.
 */
import NavBar from './components/NavBar'
import FadeInSection from './components/FadeInSection'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <main className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <section id="home" className="min-h-[calc(100vh-72px)] flex items-center">
          <FadeInSection>
            <p className="text-accent text-sm tracking-widest uppercase">Hi, my name is</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-lightest-slate leading-tight">Rachel Cordi</h1>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate leading-tight">
              I build data-driven things for the web.
            </h2>

            <p className="mt-6 max-w-5xl text-base md:text-lg text-light-slate leading-relaxed">
              I’m a Data Science student at York University focused on building clean, practical projects from full-stack web apps to machine learning tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded px-6 py-3 bg-accent text-navy font-semibold hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded px-6 py-3 border border-accent text-accent hover:bg-accent-tint transition"
              >
                About Me
              </a>
            </div>
          </FadeInSection>
        </section>

         <section id="about" className='py-24'>
          <FadeInSection>
            <h3 className="text-lightest-slate text-2xl font-semibold">About</h3>
            <p className="mt-4 max-w-2xl leading-relaxed">
              {/* [More Information] */}
            </p>
          </FadeInSection>
        </section>

        <section id="experience" className='py-24'>
          <FadeInSection>
            <h3 className="text-lightest-slate text-2xl font-semibold">Experience</h3>
            <p className="mt-4 max-w-2xl leading-relaxed">
              {/* [More Information] */}
            </p>
          </FadeInSection>
        </section>

        <section id="projects" className='py-24'>
          <FadeInSection>
            <h3 className="text-lightest-slate text-2xl font-semibold">Projects</h3>
            <p className="mt-4 max-w-2xl leading-relaxed">
              {/* [More Information] */}
            </p>
          </FadeInSection>
        </section>
      </main>
    </div>
  )
}
  
export default App