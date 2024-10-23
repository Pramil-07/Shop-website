

import React from 'react';
import Header from '../components/ui/Header';
import Banner from '../components/ui/Banner';
import Explore from '../components/ui/Explore';
import OrderSweet from '../components/ui/OrderSweets';
import Selling from '../components/ui/Selling';
import InstantDelivery from '../components/ui/InstantDelivery';
import Testimonial from '../components/ui/Testimonial';
import Footer from '../components/ui/Footer';
import ErrorBoundary from '../components/ui/ErrorBoundary';

export default function Home() {
  return (
    <ErrorBoundary>
      <Header />
      <Banner/>
      <Selling/>
      <OrderSweet/>
      <InstantDelivery/>
      <Explore/>
      <Testimonial/>
      < Footer/>
    </ErrorBoundary>
  );
}
