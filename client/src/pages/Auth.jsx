import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png';
import { motion } from "motion/react"
import { IoSparkles } from "react-icons/io5"
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import maheshwariLogo from '../assets/images/maheshwari-auth.svg';

function Auth({ isModel = false }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const messageListener = (event) => {
            if (event.origin !== window.location.origin) return;

            if (event.data?.type === 'OIDC_AUTH_SUCCESS') {
                dispatch(setUserData(event.data.user));
            } else if (event.data?.type === 'OIDC_AUTH_ERROR') {
                console.error("Popup Auth Error:", event.data.error);
                dispatch(setUserData(null));
            }
        };

        window.addEventListener('message', messageListener);
        return () => window.removeEventListener('message', messageListener);
    }, [dispatch]);

    const handleOidcAuth = () => {
        const oidcUrl = import.meta.env.VITE_OIDC_URL || "http://localhost:8000";
        const clientId = import.meta.env.VITE_OIDC_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_OIDC_REDIRECT_URI || "http://localhost:5173/auth/callback";
        const scopes = "openid profile email location";
        const authUrl = `${oidcUrl}/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}&prompt=select_account`;

        const width = 500;
        const height = 650;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(
            authUrl,
            'OIDC_Auth_Popup',
            `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
        );
    }

    return (
        <div className={`
      w-full 
      ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
    `}>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.05 }}
                className={`
        w-full 
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
        bg-white shadow-2xl border border-gray-200
      `}>
                <div className='flex items-center justify-center gap-3 mb-6'>
                    <img src={logo} alt='SRMPREPHUB' className='w-10 h-10 rounded-lg object-contain' />
                    <h2 className='font-semibold text-lg'>SRMPREPHUB</h2>
                </div>

                <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                    Continue with
                    <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                        <IoSparkles size={16} />
                        AI Smart Interview
                    </span>
                </h1>

                <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                    Sign in to start AI-powered mock interviews,
                    track your progress, and unlock detailed performance insights.
                </p>

                <motion.button
                    onClick={handleOidcAuth}
                    whileHover={{ opacity: 0.9, scale: 1.03 }}
                    whileTap={{ opacity: 1, scale: 0.98 }}
                    className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md '>
                    <img src={maheshwariLogo} alt="Maheshwari Auth" className="w-5 h-5 rounded-md" />
                    Continue with Maheshwari Auth
                </motion.button>
            </motion.div>
        </div>
    )
}

export default Auth
