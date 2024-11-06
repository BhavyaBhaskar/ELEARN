/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wbteatmvdjvasysfvnma.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndidGVhdG12ZGp2YXN5c2Z2bm1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MDg4NDYsImV4cCI6MjA0MzA4NDg0Nn0.amQ9HXgWfsQq-EV61WYW_fZqagQxZBfejgvO2QCKRwg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
