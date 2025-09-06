import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>الصفحة اللي بتدور عليها مش موجودة.</p>
      <Link to="/">رجوع للصفحة الرئيسية</Link>
    </div>
  );
}

export default NotFound;
