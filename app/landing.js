import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>Esta es la landing page.</p>
      <Link href="/">
        <button>Ir a la página principal</button>
      </Link>
    </div>
  );
};

export default LandingPage;
