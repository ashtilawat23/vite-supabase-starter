import { createClient } from '@supabase/supabase-js';

const supabase_url=process.env.VITE_SUPABASE_URL;
const supabase_key = process.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabase_url, supabase_key);

export default supabase;
