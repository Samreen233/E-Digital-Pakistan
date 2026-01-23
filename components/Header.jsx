"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({}); // track which items are expanded

  const toggleExpand = (item) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-black">EDP</span>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 text-sm text-black">
            <Link href="#">Hire Talent</Link>
            <Link href="#">Consulting & Services</Link>
            <Link href="#">Clients</Link>
            <Link href="#">Blog</Link>
            <Link href="#">About Us</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-black">
            <Link href="#">Apply as Talent</Link>
            <button className="bg-emerald-500 text-black px-4 py-2 rounded-md">
              Hire Top Talent
            </button>
            <Link href="#">Log In</Link>
          </div>

          {/* Hamburger */}
          <div>
            <button className="flex-1 lg:hidden bg-emerald-500 text-black py-2 px-4 mr-4 rounded-md font-medium hover:bg-emerald-600 transition cursor-pointer">
              Hire Top Talent
            </button>
            <button
              className="lg:hidden text-2xl text-black"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Top */}
          <div className="flex items-center justify-between px-6 h-16 border-b">
            <span className="text-xl font-bold text-black">Brand</span>
            <button
              className="text-3xl text-black"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col w-full border-b">
            {[
              { name: "Hire Talent", hasSub: true },
              { name: "Consulting & Services", hasSub: true },
              { name: "Clients", hasSub: false },
              { name: "Blog", hasSub: false },
              { name: "About Us", hasSub: false },
            ].map((item) => (
              <div key={item.name} className="border-b">
                <button
                  onClick={() =>
                    item.hasSub ? toggleExpand(item.name) : setOpen(false)
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-black"
                >
                  {item.name}
                  {item.hasSub && (
                    <span className="text-xl">
                      {expanded[item.name] ? "−" : "▸"}
                    </span>
                  )}
                </button>
                {item.hasSub && expanded[item.name] && (
                  <div className="pl-6 pb-4 flex flex-col space-y-2 text-black">
                    <Link
                      href="#"
                      className="text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Subitem 1
                    </Link>
                    <Link
                      href="#"
                      className="text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Subitem 2
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex px-6 py-4 gap-3">
            <button className="flex-1 border py-3 rounded-md font-medium text-black hover:bg-gray-100 transition cursor-pointer">
              Apply as a Talent
            </button>
            <button className="flex-1 bg-emerald-500 text-black py-3 rounded-md font-medium hover:bg-emerald-600 transition cursor-pointer">
              Hire Top Talent
            </button>
            <button className="flex-1 border py-3 rounded-md font-medium text-black hover:bg-gray-100 transition cursor-pointer">
              Log In
            </button>
          </div>
        </div>
      )}
    </>
  );
}
