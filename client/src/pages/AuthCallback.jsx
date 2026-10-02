import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { motion } from 'motion/react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function AuthCallback() {
    const location = useLocation();
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const params = new URLSearchParams(location.search);
                const code = params.get('code');

                if (!code) {
                    throw new Error("Authorization code not found in URL");
                }

                // Send code to SRMPREPHUB backend to complete token exchange
                const result = await axios.post(
                    `${ServerUrl}/api/auth/oidc/callback`,
                    { code },
                    { withCredentials: true }
                );

                // Pass the data back to the parent window that opened this popup
                if (window.opener) {
                    window.opener.postMessage({
                        type: 'OIDC_AUTH_SUCCESS',
                        user: result.data
                    }, window.location.origin);

                    window.close();
                } else {
                    window.location.href = '/';
                }
            } catch (err) {
                console.error("Auth Callback Error:", err);
                const errorMessage = err?.response?.data?.message || err.message || "Failed to authenticate";
                setError(errorMessage);

                if (window.opener) {
                    window.opener.postMessage({
                        type: 'OIDC_AUTH_ERROR',
                        error: errorMessage
                    }, window.location.origin);
                }
            }
        };

        handleCallback();
    }, [location.search]);

    return (
        <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20">
            <div className="max-w-md w-full p-8 rounded-3xl bg-white shadow-2xl border border-gray-200 text-center">
                {error ? (
                    <div>
                        <h2 className="text-xl font-semibold text-red-600 mb-2">Authentication Failed</h2>
                        <p className="text-gray-500 mb-6">{error}</p>
                        <button
                            onClick={() => window.close()}
                            className="px-6 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800"
                        >
                            Close Tab
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center gap-4"
                    >
                        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-800" />
                        <p className="text-lg font-medium text-gray-700">Completing Sign-In...</p>
                        <p className="text-sm text-gray-500">Please wait while we verify your credentials.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default AuthCallback;
