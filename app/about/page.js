// app/about/page.tsx
import Footer from '@/components/Footer';


export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24 px-4">
      <section className="max-w-4xl mx-auto space-y-12 pb-12">
        <div>
          <h1 className="text-4xl font-bold text-red-600 mb-4">Welcome to StrengthBlast</h1>
          <p className="text-lg text-gray-300">
            At <span className="text-red-500 font-semibold">StrengthBlast</span>, we dont just build bodies — we build discipline,
            strength, and community. Our mission is to provide a hardcore, no-nonsense fitness environment
            for anyone serious about reaching their potential. Whether you&apos;re a beginner or a seasoned
            lifter, this is your home — a place where iron meets intent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">Founded in 2021</h2>
          <p className="text-gray-300">
            StrengthBlast was launched in <span className="text-white font-semibold">2021</span>, born out of pure passion for fitness and a frustration
            with &quot;soft&quot; gyms that only care about selfies and smoothies. We started small — just a few
            racks, raw steel, and like-minded lifters — but we&apos;ve grown into one of the most respected
            underground gyms in the area.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">What Makes Us Different?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong className="text-white">No excuses, no gimmicks</strong> — just real results.</li>
            <li><strong className="text-white">Old-school atmosphere</strong>, modern equipment.</li>
            <li><strong className="text-white">24/7 access</strong> for members who grind on their own schedule.</li>
            <li><strong className="text-white">Strength-first philosophy</strong> — we train for performance, not just aesthetics.</li>
            <li><strong className="text-white">Supportive community</strong> — no egos, just effort.</li>
          </ul>
        </div>

        <div className="text-center text-red-600 font-semibold text-xl">
          We don&apos;t chase trends. We build beasts.
        </div>
      </section>
      <Footer/>
    </main>
  );
}
