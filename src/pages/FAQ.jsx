import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        FAQ
      </h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold">
            1. How long does delivery take?
          </h3>
          <p>
            Delivery usually takes 3–7 business days depending on your location.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            2. Do you offer cash on delivery?
          </h3>
          <p>Yes! COD is available for selected areas.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            3. Are the toys safe for kids?
          </h3>
          <p>
            All our products meet international safety standards and are
            kid-friendly.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Can I change my order?</h3>
          <p>
            You may request changes within the first 2 hours after ordering.
          </p>
        </div>
      </div>
    </section>
  );
}
export default FAQ