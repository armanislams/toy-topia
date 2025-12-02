import React from 'react';

const ContactUs = () => {
    return (
      <div>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Email */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-xl">Email</h3>
              <p className="text-gray-600">support@toy-topia-store.com</p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-xl">Phone</h3>
              <p className="text-gray-600">+60 123 456 789</p>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-xl">Address</h3>
              <p className="text-gray-600">
                123 Toy Street, Kuala Lumpur, Malaysia
              </p>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-500">
            <p>We’re here to help you Monday to Friday, 9:00 AM – 6:00 PM.</p>
          </div>
        </section>
      </div>
    );
};

export default ContactUs;