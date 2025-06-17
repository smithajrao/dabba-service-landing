import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-gradient-to-br from-yellow-50 to-orange-100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-700">
          Fresh, Affordable Dabba Service for Students
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-8">
          Home-cooked vegetarian meals delivered right to your university campus. Healthy, tasty, and budget-friendly.
        </p>
        <a href="#waitlist" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
          Join the Waitlist
        </a>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-12 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-orange-800">Join Our Waitlist</h2>
          <p className="text-center text-gray-600 mb-8">
            We’re launching soon! Enter your details and be the first to get access.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScD2h5Aswmx6h4irewrlWqw5X1x-tLxdnt2Faof8up3lpe6nA/viewform?embedded=true" 
            width="640" 
            height="1153" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<section className="py-12 bg-orange-50">
  <div className="max-w-5xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-6 text-orange-800">Simple Pricing</h2>
    <p className="mb-10 text-gray-600">Choose a plan that suits your hunger and schedule.</p>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: 'Weekly Plan', price: '$25/week', features: ['1 meal/day', 'Mon–Fri', 'Pickup at campus'] },
        { title: 'Monthly Plan', price: '$90/month', features: ['1 meal/day', '30 days', 'Home-style cooking'] },
        { title: 'Premium Plan', price: '$150/month', features: ['2 meals/day', 'Custom diet', 'Free delivery'] }
      ].map((plan, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-orange-700">{plan.title}</h3>
          <p className="text-2xl font-bold mb-4">{plan.price}</p>
          <ul className="text-left space-y-1 text-sm text-gray-600">
            {plan.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-12 bg-white">
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-3xl font-bold mb-8 text-orange-800">What Students Say</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { name: 'Aarav M.', quote: "This service made it easy to eat healthy without cooking. Affordable and delicious!" },
        { name: 'Priya S.', quote: "Best decision I made on campus. Meals remind me of home!" }
      ].map((t, i) => (
        <div key={i} className="bg-orange-100 p-6 rounded-xl shadow-md text-left">
          <p className="italic text-gray-700">“{t.quote}”</p>
          <p className="mt-4 font-semibold text-orange-800">– {t.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>

    
  );

  
}

export default App;
