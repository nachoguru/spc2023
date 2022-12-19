# Stock Picking Contest 2023

## (A Supabase Hackathon Joint)

...in which I use the looming deadline of the Supabase Hackathon to escape analysis paralysis, and finally hammer out an MVP for a friend to manage [his annual Stock Picking Contest](http://everythingeven.com/2022spc.php) for the CEO.ca community.

And if you're gonna make something to manage **one** SPC, why not make something to manage **ALL** the SPCs?

![Obligatory Meme](https://i.imgflip.com/74r9ct.jpg)

## Status: Not Even Worth Judging, Move Along

The landing page is up at [https://spc2023.deno.dev/](https://spc2023.deno.dev/) but this isn't an application yet by any stretch of the imagination.

The hardest part of any project is starting, so I'm glad to have finally started. It's pretty sweet to see Github and Deno Deploy and Supabase playing nicely together, so this was a useful exercise. I'll call it a night now on that high (for me) note.

I will keep plugging away over the holidays, because I need to use this thing. I'd really like to see if I can get IEX's awesome Apperate stuff in here as well, and TradingView charts for the visual pizazz. 

## MVP Goals:

First, to [Learn In Public](https://www.swyx.io/learn-in-public) :

 * using Github public repos (this is my first, sweet)
 * [Deno](https://deno.land/)
 * [Deno Deploy](https://deno.com/deploy)
 * [Fresh](https://fresh.deno.dev/)
 * [Supabase](https://supabase.com/) for the [PostgreSQL](https://www.postgresql.org/) back-end
 * [Supabase-JS](https://supabase.com/docs/reference/javascript/introduction) client library
 * [Supabase Auth](https://supabase.com/auth)
 * [IEX Cloud / Apperate](https://iexcloud.io/docs/apperate-apis)
 * [TradingView chart widget](https://www.tradingview.com/widget/)

These technologies overlap in many ways, so I may not hit the perfect combination of their capabilities on the first attempt. Feedback is welcome, and I'll iterate from here.

Also to hopefully build something useful, to help others, uh, help *other* others, by showing that managing their own saving / investing / speculation can be fun, and even profitable. Okay, not this year, but eventually, if you put in the work.

If you subscribe to any variant of the Efficient Markets hypothesis, you can either close this page now or try following any three stocks for a year to disabuse yourself of that misconception.  I mean:

![The stock market is made of people](https://memecreator.org/static/images/memes/5536741.jpg)

Finally, this sprint is an attempt to show myself that gluing together existing services can be more productive than my usual approach of building and hosting everything on my own servers.

## More Specifically: The Specs

A user with a `contest_admin` role should be able to create a `contest` and manage its configuration/settings.

Each contest has a link that the admin can distribute to invite their users (the `participant` role) to join the contest.

Participants visit that link and join the contest by entering a user name and adding their stock picks subject to the contest's constraints.

Basic leaderboard and dashboard features to monitor progress of contest, updated daily.

Analysis and visualization can get richer and richer over time, but for today this MVP is just about taking the manual data entry work out of launching and managing a Stock Picking Contest, and building in progress tracking from Day One.

## Day 1, Hurdle 1: Seek First To Understand...

It's hard to believe, but some people don't love SQL, or don't know it and don't want to learn it. And then there are people like me, who go too far in the other direction.

![Nahhh... Oooff!](https://i.imgflip.com/74szfb.jpg)

Supabase not only hosts and backs up and scales your PostgreSQL for you, it also provides [a handy JS library](https://supabase.com/docs/reference/javascript/introduction) so your server-side JS app can send JS to Supabase and get JS back and work with JS the whole time, even send JS to your client-side JS.

This is a **Supabase** hackathon, so you'd think I'd *start* by using their JS hotness, it's supa-powerful:

```javascript
const age = 99;
const { data, error } = await supabase
  .from('users')
  .select('id', 'name', 'age')
  .gt('age', age)
  .order('age', { ascending: false })
  .limit(100);
```

But I suffer from ORM PTSD from my Python-SQLAlchemy days and I would rather just write SQL whenever I can.
This summer, before I'd ever heard of Supabase, I heard on a podcast
that the ES6 Tagged Template Strings I saw in [Postgres.js](https://deno.land/x/postgresjs)
were not as terrifyingly vulnerable as they look at first glance:

```javascript
const age = 99;
const users = await sql`
  select id, name, age
  from users
  where age > ${ age }
  order by age desc limit 100
`;
```

They are [serialized behind the scenes](https://deno.land/x/postgresjs@v3.3.2#queries) to prepared statements that help prevent SQL Injection Attacks.
So I thought, sweet, that's what I'll use when I build something with PostgreSQL on Deno.

Unfortunately I was unable to get Postgres.js or deno-postgres, or even dbeaver (JDBC) or, you know, that obscure hipster client `psql`
to connect to my Supabase database from Linux over SSL/TLS.  I only succeeded in finding new ways to raise errors along the lines of:

```
psql: error: connection to server at "db.redacted.supabase.co" (35.xxx.250.yyy), port 5432
  failed: Connection refused
	Is the server running on that host and accepting TCP/IP connections?
```

So I switched to Supabase-JS and my test query **just worked**, and while I couldn't easily see the
traffic between my Deno code and Supabase's servers, I did specify an https:// URL for it to use.
I'll choose to believe (for tonight) that those connections are end-to-end encrypted.
I'd want to test that more thoroughly before using all this with production data.

I still would really like to make provably secure, direct connections to PostgreSQL on Supabase dbs outside of their JS API client,
so if anyone can link me to the One Simple Trick I was missing, please do.

## Non-Goals

 * ~~ORMs or ORM-like JS~~ fine
 * personally identifying information in any form other than an email address
 * prize administration or fulfilment
 * payments (maybe next year)
 * real-time stock data
 * user analytics
 * anything that makes me touch NPM or Node
 * GraphQL
 * tests
 * perfection

## Done So Far:

 * create a public Github with a README and at least one meme
  * via https://imgflip.com/memegenerator/137479224/yo-dawg-i-heard-you-like
 * generate initial Fresh project template
  * via https://fresh.deno.dev/docs/getting-started/create-a-project
 * create a new, empty Supabase database project
  * via https://supabase.com/docs/guides/database/connecting-to-postgres
 * outline initial features above
 * resist the urge to write all day instead of programming
 * meme #2
  * via https://www.memecreator.org/template/soylent-green
 * attempt to add Supabase to this project: store connection settings, without putting sekrits in code
 * study Deno approaches to environment variables in dev vs. Deno Deploy
 * fail to resist the urge to use a non-Supabase PostgreSQL library to directly connect to PostgreSQL over SSL/TLS
 * fail to get that to work, but collect notes to write that up in the future, try to make it easier for Deno users
 * meme #3
  * via https://imgflip.com/memegenerator/347322432/Jordi-Lafoge
   * I know, it's actually [Geordi La Forge](https://en.wikipedia.org/wiki/Geordi_La_Forge) but that's not my page. I can't change it!

## ToDo:

 * get a temporary public install of the running test page onto Deno Deploy, to iron out dev vs. prod differences
 * create initial PostgreSQL model in Supabase
 * build in all that RLS goodness
 * set up magic link email logins with Supabase Auth / Fresh
 * bring in IEX Apperate for initial "Stock Symbol Search" feature
 * use TradingView stock widget for charting
 * ???
 * profit!
 
K enough text... gotta get to work.
