import { createClient } from "@sanity/client";
import imageBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "0sf13c6l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
