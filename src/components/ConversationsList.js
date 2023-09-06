// ConversationsList.js
import React from 'react';

export  function ConversationsList({ conversations, onSelect }) {
  return (
    <div>
      {conversations.map(convo => (
        <div key={convo.id} onClick={() => onSelect(convo)}>
          {convo.name}
        </div>
      ))}
    </div>
  );
}
