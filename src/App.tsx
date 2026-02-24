/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BeforeAfter from './components/BeforeAfter';
import Benefits from './components/Benefits';
import CustomerPain from './components/CustomerPain';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Guarantee from './components/Guarantee';
import Hero from './components/Hero';
import Mechanism from './components/Mechanism';
import Offer from './components/Offer';
import SocialProof from './components/SocialProof';
import VideoDemo from './components/VideoDemo';

export default function App() {
  return (
    <div className="bg-white">
      <Hero />
      <BeforeAfter />
      <VideoDemo />
      <CustomerPain />
      <Mechanism />
      <Benefits />
      <SocialProof />
      <Offer />
      <Guarantee />
      <FloatingWhatsApp />
    </div>
  );
}
