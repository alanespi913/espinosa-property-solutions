export default function Website(){
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold">Espinoza Property Solutions</h1>
        <div className="space-x-6 text-sm">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Reliable Property Improvements That Add Real Value</h2>
        <p className="text-neutral-600 mb-6">
          We help homeowners and landlords improve, repair, and upgrade their properties with honest pricing and quality work.
        </p>
        <a href="#contact" className="bg-black text-white px-6 py-3 rounded-2xl shadow">
          Request a Quote
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-16 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-10">Services</h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {title:"Interior Repairs",desc:"Drywall repair, patching, trim work, door adjustments"},
            {title:"Flooring Install",desc:"Vinyl plank flooring and simple flooring upgrades"},
            {title:"Property Turnovers",desc:"Quick repairs to prepare rentals for new tenants"},
            {title:"Painting",desc:"Clean, professional interior painting"},
            {title:"Fixture Install",desc:"Lights, faucets, handles, hardware"},
            {title:"General Improvements",desc:"Small upgrades that increase property value"}
          ].map((service,i)=>(
            <div key={i} className="p-6 bg-neutral-50 rounded-2xl shadow-sm">
              <h4 className="font-medium mb-2">{service.title}</h4>
              <p className="text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-16 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">About</h3>
        <p className="text-neutral-600">
          Espinoza Property Solutions focuses on practical improvements that increase property value and functionality. Our goal is simple: deliver reliable work, fair pricing, and results that last.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-16 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">Request a Quote</h3>

        <form className="max-w-xl mx-auto grid gap-4">
          <input placeholder="Name" className="border p-3 rounded-xl" />
          <input placeholder="Email" className="border p-3 rounded-xl" />
          <input placeholder="Project Type" className="border p-3 rounded-xl" />
          <textarea placeholder="Describe your project" className="border p-3 rounded-xl h-32" />

          <button className="bg-black text-white py-3 rounded-2xl shadow">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-neutral-500 py-6">
        © {new Date().getFullYear()} Espinoza Property Solutions
      </footer>
    </div>
  )
}
