import { Head } from "$fresh/runtime.ts";
//import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>SPC2023 - Stock Picking Contest</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="my-6">
          Future home of a useful site for
          anyone who wants to run their own
          Stock Picking Contest.
        </p>
        <img
          src="https://memecreator.org/static/images/memes/5536741.jpg"
          class="object-fill mx-auto"
          alt="The stock market is made of people!"
        />
      </div>
    </>
  );
}
