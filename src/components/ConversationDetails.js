import React, { useState } from 'react';
import { sendMessage, markMessageAsRead } from './ConversationsUtil'; // Asegúrate de tener la ruta correcta.

export default function ConversationDetail({ conversation, currentUserId, onDelete, onEdit }) {
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editingContent, setEditingContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  const handleEdit = (messageId, content) => {
    setEditingMessageId(messageId);
    setEditingContent(content);
  };

  const handleDelete = messageId => {
    setIsModalOpen(true);
    setMessageToDelete(messageId);
  };

  const handleConfirmDelete = () => {
    onDelete(messageToDelete);
    setIsModalOpen(false);
    setMessageToDelete(null);
  };

  const handleSendMessage = (text) => {
    sendMessage(conversation, currentUserId, text);
    // Aquí podrías realizar una llamada API para actualizar la base de datos, si es necesario.
  };

  return (
    <div className="conversation-detail">
      {conversation.conversations.map((msg) => (
        <div key={msg.id} className={`message ${msg.sendBy === currentUserId ? 'own-message' : 'other-message'}`}>
          <span>{msg.sendBy === currentUserId ? 'Tú' : 'Ellos'}: {msg.message}</span>
          <span>{msg.date} {msg.hour}</span>
          {msg.sendBy === currentUserId && (
            <div className="actions">
              <button onClick={() => handleEdit(msg.id, msg.message)}>Editar</button>
              <button onClick={() => handleDelete(msg.id)}>Eliminar</button>
            </div>
          )}
          {msg.flag && <span>✔✔</span>}
        </div>
      ))}
      {editingMessageId && (
        <div className="editing-message">
          <input 
            value={editingContent} 
            onChange={e => setEditingContent(e.target.value)} 
          />
          <button onClick={() => {
            onEdit(editingMessageId, editingContent);
            setEditingMessageId(null);
          }}>
            Guardar
          </button>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          ¿Estás seguro de que deseas eliminar este mensaje?
          <button onClick={handleConfirmDelete}>Confirmar</button>
          <button className="cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
        </div>
      )}
      <div className="new-message">
        <input placeholder="Escribe un mensaje..." />
        <button onClick={() => handleSendMessage("Nuevo mensaje!")}>Enviar</button>
      </div>
    </div>
  );
}







