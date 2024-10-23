import React from 'react';
import { Navigate } from 'react-router-dom';
import useStore from '../store/useStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isVerified = useStore((state) => state.isVerified);
  
  if (!isVerified) {
    return <Navigate to="/verify" replace />;
  }
  
  return <>{children}</>;
}