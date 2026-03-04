import IntroGate from "@/components/IntroGate";

export default function Home() {
  return (
    <IntroGate>
      <div className="min-h-screen bg-[var(--nf-paper)] text-[var(--nf-ink)]">
        <div className="min-h-screen bg-[var(--nf-paper)] text-[var(--nf-ink)]">
          {/* Top bar */}
          <header className="sticky top-0 z-50 border-b border-[var(--nf-mist)] bg-[var(--nf-paper)]/80 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-lg border border-zinc-200">
                  <img src="/badge.svg" alt="NFO" />
                </div>
              </div>

              <nav className="hidden items-center gap-6 text-sm md:flex">
                <a className="hover:text-zinc-600" href="#about">
                  Lényeg
                </a>
                <a className="hover:text-zinc-600" href="#story">
                  Történet
                </a>
                <a className="hover:text-zinc-600" href="#values">
                  Alapelvek
                </a>
                <a className="hover:text-zinc-600" href="#contact">
                  Kapcsolat
                </a>
              </nav>

              <a
                href="#contact"
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Kapcsolat
              </a>
            </div>
          </header>

          {/* Hero */}
          <main>
            <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-medium text-zinc-600">
                    Family Office • hosszú táv • diszkréció
                  </p>
                  <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] md:text-5xl">
                    Elegáns, biztonságos és átlátható keretrendszer a családi
                    vagyon és értékek hosszú távú gondozásához.
                  </h1>
                  <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                    Az NFOFFICE célja, hogy a döntések rendezettek, követhetőek
                    és generációkon átívelően is fenntarthatóak legyenek —
                    bizalommal, józan működéssel.
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#contact"
                      className="rounded-xl bg-[var(--nf-mauve)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Kapcsolatfelvétel
                    </a>
                    <a
                      href="#about"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      Tudj meg többet
                    </a>
                  </div>
                </div>

                {/* Placeholder visual */}
                <div className="rounded-2xl border border-[var(--nf-mist)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="aspect-[4/3] w-full rounded-xl border border-zinc-200 bg-white" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-10 rounded-lg border border-zinc-200 bg-white" />
                    <div className="h-10 rounded-lg border border-zinc-200 bg-white" />
                    <div className="h-10 rounded-lg border border-zinc-200 bg-white" />
                  </div>
                  <p className="mt-4 text-xs text-zinc-500">
                    (Ide később jöhet egy finom grafika, fotó vagy
                    illusztráció.)
                  </p>
                </div>
              </div>
            </section>

            {/* About */}
            <section id="about" className="border-t border-zinc-200 bg-white">
              <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
                  Mi a family office lényege?
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Egy family office a családi vagyon és ügyek olyan koordinált
                  kezelése, ahol a fókusz a hosszú távon fenntartható működésen,
                  a transzparens döntéshozatalon és a bizalommal felépített
                  folyamatokon van.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      t: "Stratégia",
                      d: "Célok, elvek, kockázatok és prioritások tisztázása.",
                    },
                    {
                      t: "Governance",
                      d: "Szerepek, szabályok, döntési folyamatok rögzítése.",
                    },
                    {
                      t: "Megvalósítás",
                      d: "Nyomon követés, riportálás, adminisztráció és kontroll.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
                    >
                      <h3 className="text-base font-semibold">{x.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Story */}
            <section id="story" className="border-t border-zinc-200 bg-zinc-50">
              <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
                  Történet
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Itt lesz egy rövid, őszinte narratíva: honnan indult a családi
                  vállalkozás, milyen értékek mentén épült, és miért jött létre
                  a family office struktúra.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      y: "Kezdetek",
                      d: "A családi vállalkozás alapjai és a szemlélet.",
                    },
                    {
                      y: "Rendszerezés",
                      d: "A folyamatok és döntések kereteinek kialakítása.",
                    },
                    {
                      y: "Hosszú táv",
                      d: "Generációkon átívelő működés és felelős építkezés.",
                    },
                  ].map((x) => (
                    <div
                      key={x.y}
                      className="rounded-2xl border border-zinc-200 bg-white p-6"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {x.y}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Values */}
            <section id="values" className="border-t border-zinc-200 bg-white">
              <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
                  Alapelvek
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    {
                      t: "Diszkréció",
                      d: "A bizalom nem ígéret, hanem működés.",
                    },
                    {
                      t: "Átláthatóság",
                      d: "Rendezett döntések, érthető riportok, követhető folyamatok.",
                    },
                    {
                      t: "Win-win szemlélet",
                      d: "Etikus együttműködések és hosszú távú értékteremtés.",
                    },
                    {
                      t: "Biztonság",
                      d: "Kockázatkezelés, kontroll és fegyelmezett végrehajtás.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-zinc-200 p-6"
                    >
                      <h3 className="text-base font-semibold">{x.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {x.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="border-t border-zinc-200 bg-zinc-50"
            >
              <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
                  Kapcsolat
                </h2>
                <p className="mt-4 max-w-3xl text-zinc-600">
                  Küldj üzenetet, és rövid időn belül visszajelzünk. (A küldés
                  funkciót a következő lépésekben kötjük be.)
                </p>

                <form className="mt-8 grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 md:max-w-2xl">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm">
                      <span className="font-medium">Név</span>
                      <input
                        className="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-zinc-900"
                        placeholder="Név"
                      />
                    </label>

                    <label className="grid gap-2 text-sm">
                      <span className="font-medium">E-mail</span>
                      <input
                        type="email"
                        className="h-11 rounded-xl border border-zinc-300 px-3 outline-none focus:border-zinc-900"
                        placeholder="email@domain.hu"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm">
                    <span className="font-medium">Üzenet</span>
                    <textarea
                      className="min-h-[120px] rounded-xl border border-zinc-300 p-3 outline-none focus:border-zinc-900"
                      placeholder="Röviden írd le, miben segíthetünk…"
                    />
                  </label>

                  <button
                    type="button"
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Üzenet küldése (demo)
                  </button>

                  <p className="text-xs text-zinc-500">
                    Tipp: később teszünk ide adatkezelési tájékoztató linket és
                    spam védelmet.
                  </p>
                </form>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} NFOFFICE</p>
              <div className="flex gap-4">
                <a className="hover:text-zinc-900" href="#contact">
                  Kapcsolat
                </a>
                <a className="hover:text-zinc-900" href="#">
                  Adatkezelés
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </IntroGate>
  );
}
