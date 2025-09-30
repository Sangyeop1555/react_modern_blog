// utils/supabase.ts
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 런타임에 죽지 않게 방어
if (!url || !anon) {
  // 절대 throw 하지 마세요. throw 하면 앱 전체가 안 뜹니다.
  console.error("[Supabase] Missing env: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY");
}

// 값이 없더라도 타입 단언으로 일단 생성(요청은 실패하지만 앱은 뜸)
export const supabase = createClient(url ?? "http://invalid", anon ?? "invalid");

export default supabase;