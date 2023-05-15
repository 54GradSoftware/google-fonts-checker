import { createClient } from '@supabase/supabase-js'

let supabase = null
if (process.env.VUE_APP_SUPABASE_URL && process.env.VUE_APP_SUPABASE_URL !== "SUPABASE_URL" && process.env.VUE_APP_SUPABASE_ANON_KEY) {
    const supabaseUrl = process.env.VUE_APP_SUPABASE_URL
    const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY

    supabase = createClient(supabaseUrl, supabaseAnonKey)
} 
export {
    supabase
}