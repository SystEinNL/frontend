import { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the component to load before showing the iframe
    setIsLoading(false);
  }, []);

  return (
    <div style={{ height: '100vh', margin: 0 }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <iframe
          src="/comingSoon/index.html"
          width="100%"
          height="100%"
          style={{ border: 'none', display: 'block' }}
          title="Coming Soon"
        />
      )}
    </div>
  );
};

export default ComingSoon;