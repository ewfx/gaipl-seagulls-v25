"use client";
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'http://4.188.72.83:5678/webhook/15e4d662-3f98-48d0-9f50-68838769ecac/chat'
		});
	}, []);

	return (<div></div>);
};

export default Chatbot;
