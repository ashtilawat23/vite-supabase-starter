import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Login() {
    const [email, setEmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.signIn({ email });
        if (error) console.log('Error logging in:', error.message);
        else console.log('Check your email for the login link!');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Send magic link</button>
            </form>
        </div>
    );
}