import React from "react";

export default function Trash({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="m32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-336h-384zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1 -32 0zm320-176h-120l-9.4-18.7a24 24 0 0 0 -21.5-13.3h-114.3a23.72 23.72 0 0 0 -21.4 13.3l-9.4 18.7h-120a16 16 0 0 0 -16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0 -16-16z" />
    </svg>
  );
}
