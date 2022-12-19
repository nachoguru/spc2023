import { createClient } from "supabase";
import { load } from "dotenv/mod.ts";

// We deliberately do NOT provide useful defaults below.
// Do NOT put real connection details in this file!
// Use the local .env file, or any better solution that suits your environment(s).
let dbconf = {
  url: "Please set the environment variable SUPABASE_URL",
  anon_key: "Please set the environment variable SUPABASE_ANON_KEY"
};

if (Deno.env.get("ENVIRONMENT") == "deploy") {
  dbconf.url = Deno.env.get("SUPABASE_URL");
  dbconf.anon_key = Deno.env.get("SUPABASE_ANON_KEY");
} else {
  let local_dot_env_file = await load();
  dbconf.url = local_dot_env_file["SUPABASE_URL"];
  dbconf.anon_key = local_dot_env_file["SUPABASE_ANON_KEY"];
}

const supabase = createClient(
  dbconf.url,
  dbconf.anon_key
);

export default supabase;
