import { createClient } from 'next-sanity';

const projectId = "6rl3lkv7";
const dataset = "production";
const apiVersion = "2023-09-10";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});