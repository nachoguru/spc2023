/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

import supabase from "./supabase_conn.ts";
const { data, error } = await supabase
  .from('test')
  .select();
// Leaving this test and console output in place for now, to see if it works on Deno Deploy as it does in local Deno.
console.dir(data);

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
