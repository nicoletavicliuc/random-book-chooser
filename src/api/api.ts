import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let { data: books, error } = await supabase
  .from('books')
  .select('*')