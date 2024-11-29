import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://asxurttblhieyctxcxig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeHVydHRibGhpZXljdHhjeGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4MjA4ODksImV4cCI6MjA0ODM5Njg4OX0.aIWQ7Y9iNO43BZpdDsI13SxfMkMzL0eTLaewAoAgf_A';

export const supabase = createClient(supabaseUrl, supabaseKey);