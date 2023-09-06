// UserProfile.js
import React, { useState } from 'react';

export  function UserProfile({ user, onSave }) {
  const [name, setName] = useState(user.name);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);

  const handleSave = () => {
    onSave({ ...user, name, imageUrl });
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} className="input" />
      <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="input" />
      <button onClick={handleSave} className="button">Guardar</button>
    </div>
  );
}
