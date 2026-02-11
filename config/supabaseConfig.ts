/**
 * SUPABASE CONFIGURATION
 * Cấu hình kết nối Supabase - Hardcoded credentials
 */

export const supabaseConfig = {
  url: 'https://ffudcfvhpryqmkmdlchl.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmdWRjZnZocHJ5cW1rbWRsY2hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NDUyMjQsImV4cCI6MjA4NjMyMTIyNH0.YYj5D9hlujfs2cu0BGMlj0pnm6yiVkVt8MEWwXzRMwE'
};

/**
 * ⚠️ LƯU Ý BẢO MẬT:
 * - API key này là "anon" key (public key) - an toàn để public
 * - KHÔNG bao giờ share "service_role" key (secret key)
 * - Sử dụng Row Level Security (RLS) để bảo vệ dữ liệu
 */
