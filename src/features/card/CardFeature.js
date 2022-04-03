import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import CardListingPage from './card-listing/components/CardListingPage';
import CardAddingPage from './card-adding/components/CardAddingPage';
import CardViewingPage from './card-viewing/components/CardViewingPage';
import CardEditingPage from './card-editing/components/CardEditingPage';

function CardFeature() {
  return (
    <Routes>
      <Route exact path="" element={<CardListingPage />} />
      <Route exact path="add" element={<CardAddingPage />} />
      <Route exact path=":cardId" element={<CardViewingPage />} />
      <Route exact path=":cardId/edit" element={<CardEditingPage />} />
      <Route exact path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default CardFeature;
