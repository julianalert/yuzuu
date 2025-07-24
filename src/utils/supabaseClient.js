import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jonaxwfpdyupzihwowtp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvbmF4d2ZwZHl1cHppaHdvd3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4Njk4NzUsImV4cCI6MjA2ODQ0NTg3NX0.O4oUR_cZMrINn2g-SfMgnU5WbT6as4C070iJ5z4mpYs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 