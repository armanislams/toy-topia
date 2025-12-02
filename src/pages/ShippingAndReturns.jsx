import React from "react";

const ShippingAndReturns = ()=> {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Shipping & Returns
      </h2>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold">Shipping Policy</h3>
        <p>
          All orders are processed within 1–2 business days. Delivery times vary
          depending on location, typically between 3–7 business days.
        </p>

        <h3 className="text-2xl font-semibold">Shipping Fees</h3>
        <p>
          Shipping fees are calculated at checkout based on weight and
          destination. Orders above a certain amount may qualify for free
          shipping.
        </p>

        <h3 className="text-2xl font-semibold">Return Policy</h3>
        <p>
          Items may be returned within 7 days of delivery if unused and in
          original packaging. Some items may not be eligible for returns such as
          clearance or hygiene-sensitive toys.
        </p>

        <h3 className="text-2xl font-semibold">Refunds</h3>
        <p>
          Once we receive your return, we will inspect the item and process your
          refund within 3–5 business days.
        </p>
      </div>
    </section>
  );
}
export default ShippingAndReturns;