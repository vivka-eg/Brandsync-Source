import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import PasswordInput from '../components/PasswordInput';
import { Stack } from '../components/Stack';
import { Row } from '../components/Row';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Box } from '../components/Box';
import { Spacer } from '../components/Spacer';
import { Divider } from '../components/Divider';
import { Surface } from '../components/Surface';
import { FaPlus, FaMoon, FaSun, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('button');
  const [activeTab, setActiveTab] = useState('primary');
  const [theme, setTheme] = useState('light');
  const [activeUI, setActiveUI] = useState('login');

  // Input field states
  const [textInput, setTextInput] = useState('');
  const [selectInput, setSelectInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="app">
      <div className="header">
        <h1>Design System Components</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      {/* Global Component Toggle */}
      <div className="component-toggle">
        <button
          className={`component-toggle-btn ${activeComponent === 'button' ? 'component-toggle-btn--active' : ''}`}
          onClick={() => setActiveComponent('button')}
        >
          Button
        </button>
        <button
          className={`component-toggle-btn ${activeComponent === 'input' ? 'component-toggle-btn--active' : ''}`}
          onClick={() => setActiveComponent('input')}
        >
          Input Field
        </button>
        <button
          className={`component-toggle-btn ${activeComponent === 'layout' ? 'component-toggle-btn--active' : ''}`}
          onClick={() => setActiveComponent('layout')}
        >
          Layout Primitives
        </button>
        <button
          className={`component-toggle-btn ${activeComponent === 'ui' ? 'component-toggle-btn--active' : ''}`}
          onClick={() => setActiveComponent('ui')}
        >
          User Interface
        </button>
      </div>

      {/* Button Component Section */}
      {activeComponent === 'button' && (
        <>
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
        </>
      )}

      {/* Input Component Section */}
      {activeComponent === 'input' && (
        <>
          <h2>Input Field Components</h2>

          {/* Text Input */}
          <section className="button-section">
            <h3>Text Input</h3>
            <div className="input-grid">
              <div className="button-demo">
                <h4>Default</h4>
                <Input
                  type="text"
                  label="Text Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </div>

              <div className="button-demo">
                <h4>With Start Icon</h4>
                <Input
                  type="text"
                  label="Text Input"
                  placeholder="Placeholder"
                  startIcon={<FaEnvelope />}
                  supportiveText="Supportive text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </div>

              <div className="button-demo">
                <h4>Disabled</h4>
                <Input
                  type="text"
                  label="Text Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  disabled
                />
              </div>

              <div className="button-demo">
                <h4>Error State</h4>
                <Input
                  type="text"
                  label="Text Input"
                  placeholder="Placeholder"
                  supportiveText="This field is required"
                  error
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Select Input */}
          <section className="button-section">
            <h3>Select Input</h3>
            <div className="input-grid">
              <div className="button-demo">
                <h4>Default</h4>
                <Select
                  label="Select Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  options={selectOptions}
                  value={selectInput}
                  onChange={(e) => setSelectInput(e.target.value)}
                />
              </div>

              <div className="button-demo">
                <h4>Disabled</h4>
                <Select
                  label="Select Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  options={selectOptions}
                  disabled
                />
              </div>

              <div className="button-demo">
                <h4>Error State</h4>
                <Select
                  label="Select Input"
                  placeholder="Placeholder"
                  supportiveText="This field is required"
                  options={selectOptions}
                  error
                  value={selectInput}
                  onChange={(e) => setSelectInput(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Number Input */}
          <section className="button-section">
            <h3>Number Input</h3>
            <div className="input-grid">
              <div className="button-demo">
                <h4>Default</h4>
                <Input
                  type="number"
                  label="Number Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  value={numberInput}
                  onChange={(e) => setNumberInput(e.target.value)}
                />
              </div>

              <div className="button-demo">
                <h4>Disabled</h4>
                <Input
                  type="number"
                  label="Number Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  disabled
                />
              </div>

              <div className="button-demo">
                <h4>Error State</h4>
                <Input
                  type="number"
                  label="Number Input"
                  placeholder="Placeholder"
                  supportiveText="This field is required"
                  error
                  value={numberInput}
                  onChange={(e) => setNumberInput(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Password Input */}
          <section className="button-section">
            <h3>Password Input</h3>
            <div className="input-grid">
              <div className="button-demo">
                <h4>Default</h4>
                <PasswordInput
                  label="Password Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>

              <div className="button-demo">
                <h4>Disabled</h4>
                <PasswordInput
                  label="Password Input"
                  placeholder="Placeholder"
                  supportiveText="Supportive text"
                  disabled
                />
              </div>

              <div className="button-demo">
                <h4>Error State</h4>
                <PasswordInput
                  label="Password Input"
                  placeholder="Placeholder"
                  supportiveText="Password must be at least 8 characters"
                  error
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Layout Primitives Section */}
      {activeComponent === 'layout' && (
        <>
          <h2>Layout Primitives</h2>

          {/* Stack Component */}
          <section className="button-section">
            <h3>Stack (Vertical Layout)</h3>
            <div className="button-demo">
              <h4>Gap Sizes</h4>
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <p>Small Gap (12px)</p>
                  <Stack gap="sm">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Stack>
                </div>
                <div>
                  <p>Medium Gap (16px)</p>
                  <Stack gap="md">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Stack>
                </div>
                <div>
                  <p>Large Gap (24px)</p>
                  <Stack gap="lg">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Stack>
                </div>
              </div>
            </div>

            <div className="button-demo">
              <h4>Alignment</h4>
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <p>Start Align</p>
                  <Stack gap="md" align="start">
                    <Box padding="sm">Short</Box>
                    <Box padding="sm">Medium Length</Box>
                    <Box padding="sm">Long</Box>
                  </Stack>
                </div>
                <div>
                  <p>Center Align</p>
                  <Stack gap="md" align="center">
                    <Box padding="sm">Short</Box>
                    <Box padding="sm">Medium Length</Box>
                    <Box padding="sm">Long</Box>
                  </Stack>
                </div>
                <div>
                  <p>End Align</p>
                  <Stack gap="md" align="end">
                    <Box padding="sm">Short</Box>
                    <Box padding="sm">Medium Length</Box>
                    <Box padding="sm">Long</Box>
                  </Stack>
                </div>
              </div>
            </div>
          </section>

          {/* Row Component */}
          <section className="button-section">
            <h3>Row (Horizontal Layout)</h3>
            <div className="button-demo">
              <h4>Gap Sizes</h4>
              <Stack gap="md">
                <div>
                  <p>Small Gap (12px)</p>
                  <Row gap="sm">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
                <div>
                  <p>Medium Gap (16px)</p>
                  <Row gap="md">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
                <div>
                  <p>Large Gap (24px)</p>
                  <Row gap="lg">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="sm">Item 2</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
              </Stack>
            </div>

            <div className="button-demo">
              <h4>Alignment</h4>
              <Stack gap="md">
                <div>
                  <p>Start Align</p>
                  <Row gap="md" align="start">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="lg">Tall Item</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
                <div>
                  <p>Center Align</p>
                  <Row gap="md" align="center">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="lg">Tall Item</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
                <div>
                  <p>End Align</p>
                  <Row gap="md" align="end">
                    <Box padding="sm">Item 1</Box>
                    <Box padding="lg">Tall Item</Box>
                    <Box padding="sm">Item 3</Box>
                  </Row>
                </div>
              </Stack>
            </div>
          </section>

          {/* Container Component */}
          <section className="button-section">
            <h3>Container (Max Width + Padding)</h3>
            <div className="button-demo">
              <h4>Sizes</h4>
              <Stack gap="md">
                <div>
                  <p>Small (640px)</p>
                  <Container size="sm" padding="md">
                    <Box padding="md">Container content with max-width: 640px</Box>
                  </Container>
                </div>
                <div>
                  <p>Medium (768px)</p>
                  <Container size="md" padding="md">
                    <Box padding="md">Container content with max-width: 768px</Box>
                  </Container>
                </div>
                <div>
                  <p>Large (1024px)</p>
                  <Container size="lg" padding="md">
                    <Box padding="md">Container content with max-width: 1024px</Box>
                  </Container>
                </div>
              </Stack>
            </div>
          </section>

          {/* Grid Component */}
          <section className="button-section">
            <h3>Grid (N-Column Layout)</h3>
            <div className="button-demo">
              <h4>Column Counts</h4>
              <Stack gap="lg">
                <div>
                  <p>2 Columns</p>
                  <Grid columns="2" gap="md">
                    <Box padding="md">Item 1</Box>
                    <Box padding="md">Item 2</Box>
                    <Box padding="md">Item 3</Box>
                    <Box padding="md">Item 4</Box>
                  </Grid>
                </div>
                <div>
                  <p>3 Columns</p>
                  <Grid columns="3" gap="md">
                    <Box padding="md">Item 1</Box>
                    <Box padding="md">Item 2</Box>
                    <Box padding="md">Item 3</Box>
                    <Box padding="md">Item 4</Box>
                    <Box padding="md">Item 5</Box>
                    <Box padding="md">Item 6</Box>
                  </Grid>
                </div>
                <div>
                  <p>4 Columns</p>
                  <Grid columns="4" gap="md">
                    <Box padding="md">1</Box>
                    <Box padding="md">2</Box>
                    <Box padding="md">3</Box>
                    <Box padding="md">4</Box>
                  </Grid>
                </div>
              </Stack>
            </div>
          </section>

          {/* Box Component */}
          <section className="button-section">
            <h3>Box (Padding Container)</h3>
            <div className="button-demo">
              <h4>Padding Sizes</h4>
              <Row gap="lg">
                <div>
                  <p>Small (12px)</p>
                  <Box padding="sm">Box with small padding</Box>
                </div>
                <div>
                  <p>Medium (16px)</p>
                  <Box padding="md">Box with medium padding</Box>
                </div>
                <div>
                  <p>Large (24px)</p>
                  <Box padding="lg">Box with large padding</Box>
                </div>
              </Row>
            </div>
          </section>

          {/* Spacer Component */}
          <section className="button-section">
            <h3>Spacer (Fixed Space)</h3>
            <div className="button-demo">
              <h4>Vertical Spacer</h4>
              <Stack gap="sm">
                <Box padding="sm">Before Spacer</Box>
                <Spacer size="lg" direction="vertical" />
                <Box padding="sm">After Large Spacer (24px)</Box>
              </Stack>
            </div>

            <div className="button-demo">
              <h4>Horizontal Spacer</h4>
              <Row gap="sm">
                <Box padding="sm">Before</Box>
                <Spacer size="lg" direction="horizontal" />
                <Box padding="sm">After Large Spacer (24px)</Box>
              </Row>
            </div>
          </section>

          {/* Divider Component */}
          <section className="button-section">
            <h3>Divider (Visual Separator)</h3>
            <div className="button-demo">
              <h4>Horizontal Divider</h4>
              <Stack gap="md">
                <Box padding="sm">Section 1</Box>
                <Divider direction="horizontal" />
                <Box padding="sm">Section 2</Box>
                <Divider direction="horizontal" />
                <Box padding="sm">Section 3</Box>
              </Stack>
            </div>

            <div className="button-demo">
              <h4>Vertical Divider</h4>
              <Row gap="md" align="center">
                <Box padding="md">Left</Box>
                <Divider direction="vertical" />
                <Box padding="md">Middle</Box>
                <Divider direction="vertical" />
                <Box padding="md">Right</Box>
              </Row>
            </div>
          </section>

          {/* Surface Component */}
          <section className="button-section">
            <h3>Surface (Background Variants)</h3>
            <div className="button-demo">
              <h4>Surface Variants</h4>
              <Stack gap="lg">
                <div>
                  <p>Base Surface</p>
                  <Surface variant="base" padding="lg">
                    <Stack gap="sm">
                      <h3>Base Surface</h3>
                      <p>Default background color matching the page base</p>
                    </Stack>
                  </Surface>
                </div>
                <div>
                  <p>Raised Surface (with shadow)</p>
                  <Surface variant="raised" padding="lg">
                    <Stack gap="sm">
                      <h3>Raised Surface</h3>
                      <p>Elevated appearance with subtle shadow</p>
                    </Stack>
                  </Surface>
                </div>
                <div>
                  <p>Container Surface (with border)</p>
                  <Surface variant="container" padding="lg">
                    <Stack gap="sm">
                      <h3>Container Surface</h3>
                      <p>Container background with visible border</p>
                    </Stack>
                  </Surface>
                </div>
                <div>
                  <p>Inset Surface</p>
                  <Surface variant="inset" padding="lg">
                    <Stack gap="sm">
                      <h3>Inset Surface</h3>
                      <p>Recessed appearance for nested content</p>
                    </Stack>
                  </Surface>
                </div>
              </Stack>
            </div>

            <div className="button-demo">
              <h4>Padding Options</h4>
              <Row gap="lg">
                <Surface variant="container" padding="sm">
                  <p>Small padding</p>
                </Surface>
                <Surface variant="container" padding="md">
                  <p>Medium padding</p>
                </Surface>
                <Surface variant="container" padding="lg">
                  <p>Large padding</p>
                </Surface>
                <Surface variant="container" padding="none">
                  <Box padding="md">
                    <p>No padding (manual control)</p>
                  </Box>
                </Surface>
              </Row>
            </div>
          </section>

          {/* Composition Example */}
          <section className="button-section">
            <h3>Composition Example</h3>
            <div className="button-demo">
              <h4>Login Form Using Layout Primitives</h4>
              <Container size="sm" padding="lg">
                <Surface variant="raised" padding="lg">
                  <Stack gap="lg" align="center">
                    <h2>Login</h2>
                    <Stack gap="md" align="start">
                      <Input
                        type="text"
                        label="Email"
                        placeholder="Enter your email"
                        startIcon={<FaEnvelope />}
                      />
                      <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                      />
                    </Stack>
                    <Divider direction="horizontal" />
                    <Row gap="sm" align="center">
                      <Button variant="primary" size="medium">Login</Button>
                      <Button variant="neutral" size="medium">Cancel</Button>
                    </Row>
                  </Stack>
                </Surface>
              </Container>
            </div>

            <div className="button-demo">
              <h4>Card Grid Using Surface</h4>
              <Grid columns="3" gap="lg">
                <Surface variant="raised" padding="lg">
                  <Stack gap="sm">
                    <h3>Card 1</h3>
                    <p>Card content with raised surface</p>
                    <Button variant="primary" size="small">Action</Button>
                  </Stack>
                </Surface>
                <Surface variant="raised" padding="lg">
                  <Stack gap="sm">
                    <h3>Card 2</h3>
                    <p>Card content with raised surface</p>
                    <Button variant="primary" size="small">Action</Button>
                  </Stack>
                </Surface>
                <Surface variant="raised" padding="lg">
                  <Stack gap="sm">
                    <h3>Card 3</h3>
                    <p>Card content with raised surface</p>
                    <Button variant="primary" size="small">Action</Button>
                  </Stack>
                </Surface>
              </Grid>
            </div>
          </section>
        </>
      )}

      {/* User Interface Section */}
      {activeComponent === 'ui' && (
        <>
          <h2>User Interface Patterns</h2>

          {/* UI Pattern Toggle */}
          <div className="tabs">
            <button
              className={`tab ${activeUI === 'login' ? 'tab--active' : ''}`}
              onClick={() => setActiveUI('login')}
            >
              Login Form
            </button>
            <button
              className={`tab ${activeUI === 'signup' ? 'tab--active' : ''}`}
              onClick={() => setActiveUI('signup')}
            >
              Signup Form
            </button>
            <button
              className={`tab ${activeUI === 'dashboard' ? 'tab--active' : ''}`}
              onClick={() => setActiveUI('dashboard')}
            >
              Dashboard Card
            </button>
            <button
              className={`tab ${activeUI === 'settings' ? 'tab--active' : ''}`}
              onClick={() => setActiveUI('settings')}
            >
              Settings Panel
            </button>
            <button
              className={`tab ${activeUI === 'cards' ? 'tab--active' : ''}`}
              onClick={() => setActiveUI('cards')}
            >
              Card Grid
            </button>
          </div>

          {activeUI === 'login' && (
            <section className="button-section">
              <h3>Login Form Pattern</h3>
              <div className="button-demo">
                <Row gap="md" align="center">
                  <Container size="md" padding="none">
                    <img
                      src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
                      alt="Login visual"
                      style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                    />
                  </Container>
                  <Container size="md" padding="lg">
                    <Surface variant="raised" padding="lg">
                      <Stack gap="lg" align="center">
                        <Stack gap="sm" align="center">
                          <h2>Welcome Back</h2>
                          <p>Sign in to your account</p>
                        </Stack>
                        <Stack gap="md" align="start">
                          <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            startIcon={<FaEnvelope />}
                          />
                          <PasswordInput
                            label="Password"
                            placeholder="Enter your password"
                          />
                        </Stack>
                        <Divider direction="horizontal" />
                        <Row gap="sm" align="center">
                          <Button variant="primary" size="medium">Sign In</Button>
                          <Button variant="neutral" size="medium">Cancel</Button>
                        </Row>
                      </Stack>
                    </Surface>
                  </Container>
                </Row>
              </div>
            </section>
          )}

          {activeUI === 'signup' && (
            <section className="button-section">
              <h3>Signup Form Pattern</h3>
              <div className="button-demo">
                <p>Centered signup form</p>
              </div>
            </section>
          )}

          {activeUI === 'dashboard' && (
            <section className="button-section">
              <h3>Dashboard Card Pattern</h3>
              <div className="button-demo">
                <p>Parameterized metric card</p>
              </div>
            </section>
          )}

          {activeUI === 'settings' && (
            <section className="button-section">
              <h3>Settings Panel Pattern</h3>
              <div className="button-demo">
                <p>Settings page layout</p>
              </div>
            </section>
          )}

          {activeUI === 'cards' && (
            <section className="button-section">
              <h3>Card Grid Pattern</h3>
              <div className="button-demo">
                <p>Content grid with loop/repeat</p>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default App;
