const supabaseUrl = 'https://gjjwdrxxioedptzmytto.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqandkcnh4aW9lZHB0em15dHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNjQwNDAsImV4cCI6MjA1Mzg0MDA0MH0.AjoldU8N7hYTiDgaNZXwDtqd03Ws5uR2oEnEpGBs3JI';

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection
supabase.from('students').select('count', { count: 'exact' })
    .then(({ count, error }) => {
        if (error) {
            console.error('Supabase connection error:', error);
        } else {
            console.log('Supabase connected successfully');
        }
    });

window.supabase = supabase;
