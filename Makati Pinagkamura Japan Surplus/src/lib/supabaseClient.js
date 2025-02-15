import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cipzhvxtnmftxqamsicd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcHpodnh0bm1mdHhxYW1zaWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MTg4NTYsImV4cCI6MjA1NTE5NDg1Nn0.zZmXXbIqigl8XmcsxBf2Rg_SXpLOyZxPKMI-ksx-Zgg')