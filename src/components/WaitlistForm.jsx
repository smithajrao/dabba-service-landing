import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactEmail: '',
    mobile: '',
    mealPlanId: ''
  });
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/mealplans')
      .then((res) => setMealPlans(res.data))
      .catch((err) => console.error('Error fetching meal plans:', err));
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.fullName || !formData.contactEmail || !formData.mobile || !formData.mealPlanId) {
      setError('All fields including meal plan are required');
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users', formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-white shadow rounded max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-green-600">✅ You're on the waitlist!</h2>
        <p className="mt-2">We'll contact you soon with plan details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Join the Dabba Service Waitlist</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        name="fullName"
        placeholder="fullName"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
      />
      <input
        name="contactEmail"
        type="email"
        placeholder="contactEmail"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
      />
      <input
        name="mobile"
        placeholder="mobile"
        className="border p-2 mb-2 w-full"
        onChange={handleChange}
      />

      <select
        name="mealPlanId"
        value={formData.mealPlanId}
        onChange={handleChange}
        className="border p-2 mb-4 w-full"
      >
        <option value="">-- Select Meal Plan --</option>
        {mealPlans.map((plan) => (
          <option key={plan.id} value={plan.id}>
            {plan.name} - ${plan.price}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Submitting...' : 'Join Waitlist'}
      </button>
    </form>
  );
}
