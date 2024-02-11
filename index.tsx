/** @jsx jsx */

import { Hono } from "https://deno.land/x/hono/mod.ts";
import { jsx } from "https://deno.land/x/hono/middleware.ts";
import { GetRandom } from "./db.ts";

const app = new Hono();

app.get("/", (c) => {
  const result = GetRandom(3);
  const authors = [
    "yuma",
    "hiroya",
    "debu",
  ];

  const list = result.map((r, i) => {
    return {
      chara: r.name,
      author: authors[i],
    };
  });

  return c.html(
    <div>
      {list.map((r) => {
        return (
          <div>
            {r.author}: {r.chara}
          </div>
        );
      })}
    </div>,
  );
});

Deno.serve(app.fetch);
