import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bxndnnctgyrlpekdezgk.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bmRubmN0Z3lybHBla2RlemdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNTEzMDgsImV4cCI6MjA2MzcyNzMwOH0.Nls2kILhmLwcgFFSEJbHDxmK-m_JgJfdZc7XA54enpY';              

export const supabase = createClient(supabaseUrl, supabaseKey);