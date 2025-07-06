"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // Dropdown state for Try it out
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav className="pixel-nav">
        <a href="#learn">Learn more</a>
        <a href="#brandkit">Brand kit</a>
      </nav>

      {/* Github and Try it out buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '1.5rem 0' }}>
        <a
          href="https://github.com/akashbiswas0/xAPT-sdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Github</button>
        </a>
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown((v) => !v)}
            style={{ fontFamily: 'inherit', fontSize: '1em' }}
          >
            &lt;/&gt; Try it out
          </button>
          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '2.2em',
                left: 0,
                background: '#fff',
                border: '3px solid #111',
                boxShadow: '4px 4px 0 #111',
                zIndex: 10,
                minWidth: 220,
                fontFamily: 'inherit',
              }}
            >
              <a
                href="https://www.npmjs.com/package/@xapt/client"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '1em',
                  borderBottom: '2px solid #111',
                  color: '#111',
                  textDecoration: 'none',
                  background: 'inherit',
                  fontSize: '0.95em',
                }}
              >
                @xapt/client
              </a>
              <a
                href="https://www.npmjs.com/package/@xapt/common"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '1em',
                  borderBottom: '2px solid #111',
                  color: '#111',
                  textDecoration: 'none',
                  background: 'inherit',
                  fontSize: '0.95em',
                }}
              >
                @xapt/common
              </a>
              <a
                href="https://www.npmjs.com/package/@xapt/server"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '1em',
                  color: '#111',
                  textDecoration: 'none',
                  background: 'inherit',
                  fontSize: '0.95em',
                }}
              >
                @xapt/server
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', letterSpacing: '-2px', margin: 0, lineHeight: 1, textShadow: '4px 4px 0 #111' }}>
          x<span style={{ color: '#888' }}>-APT</span>
        </h1>
        <p style={{ fontSize: '1.1rem', margin: '2rem 0 2.5rem 0', color: '#222', fontWeight: 400 }}>
          An open protocol for internet-native payments
        </p>
        <a href="#whitepaper" style={{ textDecoration: 'none' }}>
          {/* <button style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Read the whitepaper
          </button> */}
        </a>
      </section>

      {/* Features Section */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div style={{ maxWidth: 900, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          <div className="neobrutal-card">
            <b>No fees</b>
            <p style={{ marginTop: 12 }}>xAPT as a protocol has 0 fees for either the customer or the merchant.</p>
          </div>
          <div className="neobrutal-card">
            <b>Blockchain Agnostic</b>
            <p style={{ marginTop: 12 }}>xAPT is not tied to any specific blockchain or token, its a neutral standard open to integration by all.</p>
          </div>
          <div className="neobrutal-card">
            <b>Security & trust via an open standard</b>
            <p style={{ marginTop: 12 }}>Anyone can implement or extend xAPT. Not tied to any centralized provider, encourages broad community participation.</p>
          </div>
          <div className="neobrutal-card">
            <b>Instant settlement</b>
            <p style={{ marginTop: 12 }}>Accept payments at the speed of the blockchain. Money in your wallet in 2 seconds, not T+2.</p>
          </div>
          <div className="neobrutal-card">
            <b>Frictionless</b>
            <p style={{ marginTop: 12 }}>As little as 1 line of middleware code or config in your server stack to start accepting payments. No account or personal info required.</p>
          </div>
          <div className="neobrutal-card">
            <b>Web native</b>
            <p style={{ marginTop: 12 }}>Activates the dormant 402 HTTP status code and works with any HTTP stack. Simple via headers and status codes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
