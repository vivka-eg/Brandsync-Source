import React from 'react';
import { Stack } from './Stack';
import { Row } from './Row';
import { Button } from './Button';

export const LoginFormTemplate: React.FC = () => {
  return (
    <Stack gap="lg" align="center">
      <Stack gap="md" align="start">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </Stack>
      <Row gap="sm" align="center">
        <Button variant="primary" size="medium">Login</Button>
        <Button variant="secondary" size="medium">Cancel</Button>
      </Row>
    </Stack>
  );
};

export const CardTemplate: React.FC = () => {
  return (
    <Stack gap="md" align="start">
      <h2>Card Title</h2>
      <p>Card description goes here with some text content.</p>
      <Row gap="md" align="end">
        <Button variant="secondary" size="small">Cancel</Button>
        <Button variant="primary" size="small">Confirm</Button>
      </Row>
    </Stack>
  );
};

export const NavigationTemplate: React.FC = () => {
  return (
    <Row gap="lg" align="center">
      <span>Logo</span>
      <Row gap="md" align="center">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </Row>
      <Button variant="primary" size="small">Sign In</Button>
    </Row>
  );
};

export const SettingsPanelTemplate: React.FC = () => {
  return (
    <Stack gap="lg" align="start">
      <h1>Settings</h1>
      <Stack gap="md" align="start">
        <Stack gap="sm" align="start">
          <label>Username</label>
          <input type="text" />
        </Stack>
        <Stack gap="sm" align="start">
          <label>Email</label>
          <input type="email" />
        </Stack>
        <Stack gap="sm" align="start">
          <label>Theme</label>
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </Stack>
      </Stack>
      <Row gap="sm" align="start">
        <Button variant="primary" size="medium">Save</Button>
        <Button variant="secondary" size="medium">Reset</Button>
      </Row>
    </Stack>
  );
};
