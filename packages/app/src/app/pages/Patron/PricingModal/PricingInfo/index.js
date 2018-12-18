import React from 'react';

import Feature from './Feature';

import { Title } from '../elements';
import { Container, CenteredHeader, Table } from './elements';

function PricingInfo() {
  return (
    <Container>
      <Title>Lifted Limits</Title>
      <Table>
        <thead>
          <tr>
            <th />
            <CenteredHeader>Free</CenteredHeader>
            <CenteredHeader supporter>Patron</CenteredHeader>
          </tr>
        </thead>
        <tbody>
          <Feature
            feature="Teams"
            free="Enabled"
            supporter="Enabled, lifted limits"
          />
          <Feature feature="Private Sandboxes" free="No" supporter="Yes" />
          <Feature feature="Sandbox Limit" free="50" supporter="Unlimited" />
          <Feature
            feature="Static File Hosting"
            free="20Mb"
            supporter="500Mb"
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default PricingInfo;
