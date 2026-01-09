import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { FaPlus, FaMoon, FaSun } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('primary');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Button Components</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'primary' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('primary')}
        >
          Primary
        </button>
        <button
          className={`tab ${activeTab === 'neutral' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('neutral')}
        >
          Neutral
        </button>
        <button
          className={`tab ${activeTab === 'subtle' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('subtle')}
        >
          Subtle
        </button>
        <button
          className={`tab ${activeTab === 'outline' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('outline')}
        >
          Outline
        </button>
        <button
          className={`tab ${activeTab === 'success' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('success')}
        >
          Success
        </button>
        <button
          className={`tab ${activeTab === 'warning' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('warning')}
        >
          Warning
        </button>
        <button
          className={`tab ${activeTab === 'error' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('error')}
        >
          Error
        </button>
        <button
          className={`tab ${activeTab === 'info' ? 'tab--active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Info
        </button>
      </div>

      {activeTab === 'primary' && (
        <>
          <h2>Primary Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'neutral' && (
        <>
          <h2>Neutral Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="neutral" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="neutral" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="neutral" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="neutral" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="neutral" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="neutral" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="neutral" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="neutral" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'subtle' && (
        <>
          <h2>Subtle Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="subtle" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="subtle" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="subtle" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="subtle" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="subtle" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="subtle" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="subtle" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="subtle" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'outline' && (
        <>
          <h2>Outline Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="outline" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="outline" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="outline" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="outline" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="outline" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="outline" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="outline" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="outline" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'success' && (
        <>
          <h2>Success Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="success" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="success" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="success" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="success" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="success" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="success" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="success" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="success" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'warning' && (
        <>
          <h2>Warning Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="warning" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="warning" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="warning" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="warning" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="warning" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="warning" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="warning" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="warning" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'error' && (
        <>
          <h2>Error Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="error" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="error" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="error" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="error" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="error" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="error" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="error" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="error" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'info' && (
        <>
          <h2>Info Variant</h2>
          <section className="button-section">
            <h3>Large Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="info" size="large">Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="info" size="large" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="info" size="large" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="info" size="large" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <span className="label">Enabled</span>
                    <Button variant="info" size="large" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <span className="label">Disabled</span>
                    <Button variant="info" size="large" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Medium Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="medium">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="medium" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="medium" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="medium" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="medium" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="medium" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="button-section">
            <h3>Small Size</h3>

            <div className="button-grid">
              <div className="button-demo">
                <h4>Text Only</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="small">Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="small" disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>Start Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="small" startIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="small" startIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>

              <div className="button-demo">
                <h4>End Icon</h4>
                <div className="button-row">
                  <div className="button-item">
                    <Button variant="info" size="small" endIcon={<FaPlus />}>Label</Button>
                  </div>
                  <div className="button-item">
                    <Button variant="info" size="small" endIcon={<FaPlus />} disabled>Label</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
