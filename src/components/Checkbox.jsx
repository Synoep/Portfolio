import React, { useState } from 'react';

function Checkbox({ label }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-gray-300">{label}</span>
    </div>
  );
}

export default Checkbox;