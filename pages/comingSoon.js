import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ComingSoon = () => {
    const router = useRouter();

    useEffect(() => {
        // This will redirect to the static /comingSoon/index.html page
        router.push('/comingSoon/index.html');
    }, [router]);

    return null;
};

export default ComingSoon;