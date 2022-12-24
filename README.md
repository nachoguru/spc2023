# Stock Picking Contest 2023 (and beyond)

An ongoing attempt hammer out an MVP for a friend to manage his [annual Stock Picking Contest](http://everythingeven.com/2022spc.php) for the CEO.ca community.

And if you're gonna make something to manage **one** SPC, why not make something to manage **ANY** such contest?

## Status: This Supabase Hackathon 6 Entry Is Incomplete... Don't Judge!

I mean, I don't mean *"don't be mean"...*

I'm saying that if you're a hackathon judge reading this, you can safely skip this incomplete project, because this version had changes after the deadline, and so is ineligible, and it's far from done.

But wait! while/if I have the attention of a Deno or Supabase team member, I have three suggestions for you below, from a user just starting out on your platforms.

I also moved my [day 1 notes](docs/progress/2022-12-18.md) to their own page as I prep for continued work on this.

### A Suggestion For Your Documentation

I know this is a never-ending job and you are doing great, keep it all up, but I have one suggestion: I recommend you please put a **date**, or a **version number**, or **both** on every bit of documentation, every blog post, every tutorial, every YouTube video or podcast.

### A Suggestion For Your Technical Support

I don't think Discord is working. It certainly won't in the long term. As Swyx points out in [Learn In Public](https://www.swyx.io/learn-in-public), it's one of those walled gardens that we should be moving away from, not towards.

I'd also add that it promotes the worst kind of [Continuous Partial Attention](https://en.wikipedia.org/wiki/Continuous_partial_attention) by lining up all of a user's interests -- every shiny new technology, interest, fandom, and every other bit of brain candy outside of tech -- alongside your would-be communities.

I'm not talking about Github issues, but funnelling all the other noise that occasionally leads someone in a support role to say "could you file an issue" -- but mostly doesn't require that, so you don't want issues to be your only support channel or the signal-to-noise ratio will be unbearable.

Discord is where the people are, sure, and it's definitely a better choice for discussion than Slack, Telegram, IRC, Twitter, and probably better even than Reddit or a self-hosted Mattermost instance. But given we all already have to watch many Discord channels in many Discord servers, and also, umpteen Github projects, StackExchange sites, and soon a hairy herd of Mastodon, a plethora of Pleromas...

I think you should get very deliberate about managing your **support** traffic *real soon now*. You are not currently building a knowledgebase at all. Or if you are, I just missed it, and I'm somewhat representative of your target audience, right at the mouth of the the onboarding funnel.

Maybe [Discourse](https://www.discourse.org/) or one of its competitors would be a better fit for the support side of things? 

### A Suggestion For Your Team(s)

Aaaannnd once again I'm spending another day writing more in my README than I am in my code. 

This Nachoguru persona is based on the idea of a helper who is always learning, always maintains a Beginner's Mind. While I might actually be helpful to someone in a tech support conversation, I'm not there to do their job for them, or to always be their "guru", but to help them learn to learn, to believe they can, to see them outgrow me.

Especially in the areas of programming literacy and financial numeracy / literacy. My dream job would be to write about programming, software, databases, and finance all day long. I can't make what you've made, but I *can* contribute to Open Source by helping stressed out maintainers and other types of creators update their docs and support their users. My main focus is the post-Node, post-cloud JS ecosystem that is best embodied by Deno, Supabase, and even IEX Apperate, which elevate their users beyond just being AWS-certified configurators.

So, uh, I guess I am saying out loud in public that I am ready for a pivot from decades of closed-source, full-stack enterprise software consulting. I would *freakin' love* to help you and others solve the above problems, but I have not been confident enough to apply for your teams yet. I have been self-employed programming for clients since 1995, but don't yet feel I can code with your tools at a level that is worth your money. So I do client work from 9-5, and only get to make progress with your tools on evenings and weekends.

I have a dozen demo apps I'd love to create, this is just the first. I'll document my the learning process as I go, and fix documentation as I go, and open source my code. Doing that for Deno or Supabase or IEX would be an epic win.

I know such a role must be earned, so I'll keep doing this work and logging my progress, and I will keep checking for job postings where I can help you solve problems like the ones above.

I'm grateful to the Hackathon for giving me a deadline that lit a fire under me to finally start playing with all these cool tools.

Happy Holidays, stay warm out there!

## Project Goals:

To [Learn In Public](https://www.swyx.io/learn-in-public) :

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


## Feature Goals / User Stories

A user with a `contest_admin` role should be able to create a `contest` and manage its configuration/settings.

Each contest has a link that the admin can distribute to invite their users (the `participant` role) to join the contest.

Participants visit that link and join the contest by entering a user name and adding their stock picks subject to the contest's constraints.

Basic leaderboard and dashboard features to monitor progress of contest, updated daily.

Analysis and visualization can get richer and richer over time, but for today this MVP is just about taking the manual data entry work out of launching and managing a Stock Picking Contest, and building in progress tracking from Day One.


## Non-Goals

 * ~~ORMs or ORM-like JS~~ fine
 * personally identifying information in any form other than a user name & email address
 * prize administration or fulfilment
 * payments (maybe next year)
 * real-time stock data
 * user analytics
 * anything that makes me touch NPM or Node
 * GraphQL
 * tests
 * perfection

## To Do

 * bring in IEX Apperate for initial "Stock Symbol Search" feature
 * compare PostgreSQL connection techniques, libraries
 * get a temporary public install of the running test page onto Deno Deploy, to iron out dev vs. prod differences
 * create initial PostgreSQL model in Supabase
 * build in all that RLS goodness
 * set up magic link email logins with Supabase Auth / Fresh
 * use TradingView stock widget for charting
 * periodically move long README notes out to daily progress files
 * ???
 * profit!
 * ...thereby making the world a better place through minimal message transport layers :)
