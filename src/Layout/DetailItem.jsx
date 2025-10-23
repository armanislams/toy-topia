import React from 'react';

const DetailItem = ({ icon, label, value, isBold = false }) => (
    <div className="flex items-start space-x-3 p-2 bg-indigo-50 rounded-lg">
        <div className="text-indigo-600 text-xl pt-1">{icon}</div>
        <div className='flex-1 min-w-0'>
            <p className="text-xs font-semibold uppercase text-indigo-600">{label}</p>
            <p className={`text-gray-800 wrap-break-words ${isBold ? 'font-extrabold text-lg' : 'font-medium'}`}>{value}</p>
        </div>
    </div>
);

export default DetailItem;