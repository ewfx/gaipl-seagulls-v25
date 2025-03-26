from supabase import create_client
import os


supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

def get_supabase_dbclient():
    return supabase