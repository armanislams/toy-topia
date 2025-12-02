import React from "react";

const Careers=()=> {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Careers
      </h2>

      <p className="text-gray-700 mb-6 text-lg">
        Join the Toy-Topia Store team and help us bring joy to kids and parents
        around the world! We’re always looking for passionate, creative, and
        dedicated individuals.
      </p>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-2xl font-semibold">Open Positions</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Customer Support Executive</li>
            <li>Warehouse & Inventory Assistant</li>
            <li>Digital Marketing Specialist</li>
            <li>Frontend React Developer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Why Work With Us?</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Friendly, fun work environment</li>
            <li>Career growth opportunities</li>
            <li>Competitive salary packages</li>
            <li>Employee discounts on toys</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">How to Apply</h3>
          <p>
            Send your resume to{" "}
            <strong>careers@toy-topia-store.com</strong> with the job title in
            the subject line.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Careers;