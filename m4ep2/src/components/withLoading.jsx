import React, { useState, useEffect } from 'react';

function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return loading ? <div>Cargando...</div> : <WrappedComponent {...props} />;
  };
}

export default withLoading;
