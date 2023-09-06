import React from 'react';

// ConversationsUtil.js

export function formatMessage(userId, messageText) {
    return {
      sendBy: userId,
      date: new Date().toISOString().split('T')[0],
      hour: new Date().toLocaleTimeString(),
      message: messageText,
      flag: false
    };
  }
  
  