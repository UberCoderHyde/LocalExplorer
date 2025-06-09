import Constants from 'expo-constants';
import { createClient } from '@supabase/supabase-js';

const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = Constants.manifest!.extra as Record<string, string>;

export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);