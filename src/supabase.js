import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjudketumxqbissjwqyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqdWRrZXR1bXhxYmlzc2p3cXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NTE2MzIsImV4cCI6MjAwMDUyNzYzMn0.z2s8x-HGKYz4gEZZ0nOydifuxB48_q0Js6dy9oLAhgg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
