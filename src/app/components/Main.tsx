import React from 'react';
import Box from './Box';

export default function Main() {
  return (
    <div className="grid grid-cols-3">
      <Box text="About Me" />
      <Box text="Contact" />
      <Box text="Music" />
      <Box text="Dokomi 2023" />
      <Box text="Dokomi 2024" />
      <Box text="Dokomi 2025" />
    </div>
  );
}
