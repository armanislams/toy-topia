import React from "react";

const PrivacyPolicy =()=> {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Privacy Policy
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          At Toy-Topia Store, your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our website.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          1. Information We Collect
        </h3>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and shipping address when you make a purchase or contact
          us. We also collect non-personal information such as website usage
          data and cookies.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          2. How We Use Your Information
        </h3>
        <p>
          Your information may be used to:
          <ul className="list-disc ml-6 mt-2">
            <li>Process and fulfill orders</li>
            <li>Provide customer support</li>
            <li>Send promotional emails (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          3. Sharing Your Information
        </h3>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with trusted partners only for the purpose
          of processing orders or providing services.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          4. Data Security
        </h3>
        <p>
          We implement appropriate security measures to protect your personal
          information. However, no method of transmission over the internet or
          storage is 100% secure.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          5. Cookies
        </h3>
        <p>
          Our website uses cookies to improve your browsing experience and
          analyze website traffic. You can choose to disable cookies in your
          browser settings, but some features may not function properly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          6. Your Rights
        </h3>
        <p>
          You have the right to access, update, or delete your personal
          information. To exercise these rights, please contact us at{" "}
          <strong>support@toy-topia-store.com</strong>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          7. Changes to This Policy
        </h3>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page, and your continued use of the website indicates
          acceptance of the updated policy.
        </p>

        <p className="mt-6 text-gray-600">
          If you have any questions regarding our Privacy Policy, please contact
          us at <strong>support@toy-topia-store.com</strong>.
        </p>
      </div>
    </section>
  );
}

export default PrivacyPolicy