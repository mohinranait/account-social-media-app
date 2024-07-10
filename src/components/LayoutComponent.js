'use client';

import LoginPage from '@/app/(auth)/login/page';
import MainHeader from '@/shared/MainHeader';
import PageLoader from '@/ui/spinners/PageLoader';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

const LayoutComponent = ({ children }) => {
    const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
    const router = useRouter();

    if (isLoading) {
        return <PageLoader />
    }

    if (!isAuthenticated) {
        return <LoginPage />
    }

    if (isAuthenticated) {
        return <>
            <MainHeader />
            <main className=''>
                {children}
            </main>
        </>
    }


    return <PageLoader />;

}

export default LayoutComponent