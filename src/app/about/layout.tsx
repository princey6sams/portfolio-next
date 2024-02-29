import NavBar from "@/components/NavBar";
import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div h-full>
      <NavBar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default ContactLayout;
