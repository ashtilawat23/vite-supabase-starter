import { supabase } from '../supabaseClient';

export default function Logout() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.log('Error logging out:', error.message);
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}