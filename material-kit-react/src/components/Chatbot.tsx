"use client"; // Required for React state in Next.js App Router

import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Paper, IconButton } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage = { role: "assistant", content: response.data.choices[0].message.content };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <>
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1976D2",
            color: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <ChatBubbleIcon />
        </IconButton>
      )}

      {open && (
        <Paper
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "320px",
            maxHeight: "450px",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "8px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <strong style={{ fontSize: "16px", color: "#1976D2" }}>Chatbot</strong>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              maxHeight: "320px",
              padding: "5px",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  margin: "5px 0",
                  padding: "8px",
                  borderRadius: "6px",
                  backgroundColor: msg.role === "user" ? "#E3F2FD" : "#F5F5F5",
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                }}
              >
                <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong>
                {msg.content}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", paddingTop: "8px" }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <IconButton onClick={sendMessage} color="primary">
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      )}
    </>
  );
};

export default Chatbot;
