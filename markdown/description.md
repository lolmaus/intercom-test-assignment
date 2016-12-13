## Cover note

Hey Intercom team! [Andrey](http://lolma.us/en/) here.

Thank you so much for the "production ready, clean and tested" part of the assignment. It lets me demonstrate my skills and actually stand out! Oh, and it's been a real pleasure to build. Please read on to know why!



#### Code style

In case you look into the code and get surprised, I use a relaxed version of the [StandardJS](http://standardjs.com/) code style, ensured by ESLint. Say goodbye to the husk of semicolons, say hello to the spread operator that JSHint chokes on.

I use the pods structure for routes, controllers, components, their templates and styles, and also for their tests and page objects. Other classes such as Ember Data ones are outside of pods.



#### The data layer

I decided to kick it up a notch: let you switch between several cities and see which customers are close enough to the selected city. The distance limit is also adjustable.

This setup raises a question: where to keep the computed property that calculates the distances? Here are some options that I rejected:

*   On the `user` model. In this case, the model must be aware of the UI state. It can be achieved with a service, but that increases coupling.
*   On a service. A feasible option, but I don't like all-knowing services, preferring small fine-grained entities.
*   On the controller. This is a great option, but the computed property can't be reused in several places. There's `this.controllerFor()`, but it won't work if that controller hasn't yet been visited.
*   On a component. It has all the disadvantages of the controller option, but adds another one: when the user leaves the page, the component gets destroyed, and the computed property is no longer cached.

Instead of all of the above, I created a [user-city junction model](https://github.com/lolmaus/intercom-test-assignment/blob/master/app/models/user-city-junction.js). It represents a unique combination of a user and a city. This is a clientside-only model, populated via `store.push` [from the model hook](https://github.com/lolmaus/intercom-test-assignment/blob/master/app/pods/city/route.js#L45-L48).

`store.push` can be safely called more than once: when the user revisits the route, it's called again, but it doesn't cause duplicates to appear.

With the junction model, every `user-city-junction` record is created exactly when it's first needed. The distance is calculated in its computed property and cached on the record, so that the app doesn't need to calculate it again.

This approach might seem an overkill for this simple use case, but I was excited to try it, and it proved to be very clean, consise and efficient.



#### The network layer

Customers and cities aren't hardcoded but rather fetched from [gist.github.com](https://gist.github.com) via the [rawgit.com](https://rawgit.com) CDN. The CDN step is necessary to work around GitHub's strict CORS policy.

The `customers.json` file [provided](https://gist.github.com/brianw/19896c50afa89ad4dec3) with the assignment isn't a valid JSON document, so I had to implement [a custom serializer](https://github.com/lolmaus/intercom-test-assignment/blob/master/app/serializers/user.js) to parse it.

I used [the simplest possible adapter implementation](https://github.com/lolmaus/intercom-test-assignment/blob/master/app/adapters/user.js): you pass an URL into the `query` method, the adapter fetches the content from that URL and passes it on to the serializer. Keep it simple, soldier!



#### FastBoot! 😎

This app is a backendless FastBoot instance. "Backendless FastBoot" sounds contradictory, but it's quite reasonable when you think about it:

1. `ember build` runs FastBoot and generates static HTML.
2. The HTML can be uploaded to a static hosting such as the free GitHub pages.
3. When the user opens the app, they immediately see it prerendered. All links behave like web 1.0 links.
4. When the JS bundle loads, Ember starts and "hydrates" the HTML, turning the page into a single page application.

The above is possible thanks to this amazing addon: [robwebdev/ember-cli-staticboot](https://github.com/robwebdev/ember-cli-staticboot).

The best part is that `ember-cli-staticboot` fills in for URL rewriting which GitHub Pages doesn't support. We no longer need to switch `location` mode to `hash` when using GitHub Pages.

**Make sure to try this page with JS disabled!**



#### Testing

For quite a while, I've been claiming to be capable of BDD. But the truth is that in all my commercial projects I had to cut corners for various reasons, such as:

*   The business pressure was too tough.
*   The management didn't see a benefit in spending time on tests.
*   The app evolution was so rapid and erratic that rewriting tests to keep them up to date would've eaten ~90% of time.

With this assignment, I finally leveraged the BDD workflow from start to finish. And I must say, it's been a great pleasure! The level of confidence BDD provides is unprecedented. Not only coding becomes stress-free, but also refactoring is no longer risky, so there's no reason to avoid it!

<img
  src   = "http://i.imgur.com/85gEnMT.png"
  alt   = "The BDD cycle"
  title = "The BDD cycle"
  style = "max-width: 300px"
>

Here's a list of technologies and approaches that I've used:

*   The [Chai](http://chaijs.com/) assertion library with its `expect` DSL.
*   Mocha test suite. When I started working with Ember, [ember-cli-chai](https://github.com/ember-cli/ember-cli-chai) wasn't available, and QUnit's assertion library was very scanty. My first attempt to resolve this was my [ember-cli-custom-assertions-collection](https://github.com/lolmaus/ember-cli-custom-assertions-collection), but then I made a decision to switch to Mocha. I had to implement a [custom test runner](https://github.com/mmelvin0/ember-cli-mocha-reporter/pull/2) to obtain the "no try/catch" feature.
*   [Mirage](http://www.ember-cli-mirage.com/). I didn't bother implementing a proper factory/model layer with Mirage and used simple [fixtures](https://github.com/lolmaus/intercom-test-assignment/tree/master/mirage/fixtures) instead. But rest assured, I have good experience with Mirage. For example, it's me who [implemented](https://github.com/samselikoff/ember-cli-mirage/pull/424) the support for JSONAPI `included` feature in Mirage.
*   The page object pattern via [ember-cli-page-object](http://ember-cli-page-object.js.org/) makes tests so much more readable! I also use my [technique](https://medium.com/@lolmaus/custom-component-helper-for-ember-cli-page-object-b6cead3ed32a) to make page objects more concise and at the same time more powerful.
*   The async/await syntax is another thing that substantially improves test readability, which I care a lot about. It's a known wisdom that reading code is more difficult than writing it, but reading tests is even more difficult. An unreadable test is a dead test.
*   Finally, I use my own code style for tests where I pull the assertion message above the assertion expression.

Here are links to some tests for you to check out:

*   Acceptance test: [city route](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/pods/city/acceptance-test.js) and the corresponding [page object](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/pods/city/page-object.js).
*   Integration test of a component with an action: [cities-chooser component](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/pods/components/cities-chooser/integration-test.js), [page object](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/pods/components/cities-chooser/page-object.js).
*   Different styles of unit tests:
  *   Model hook of the [city route](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/pods/city/route-test.js).
  *   Helper: [round](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/unit/helpers/round-test.js)
  *   A computed property on the [user-city-junction model](https://github.com/lolmaus/intercom-test-assignment/blob/master/tests/unit/models/user-city-junction-test.js).
  
Please [try running tests online](http://lolmaus.github.io/intercom-test-assignment/tests) and [view the coverage report](http://lolmaus.github.io/intercom-test-assignment/coverage)!
  
I ran short on time and didn't test some extra features that weren't part of the assignment, e. g. the map. 

BTW, [ember-leaflet](http://www.ember-leaflet.com/) is an awesome addon, but it doesn't provide any testing abstractions. :( I'm not even sure how interactive maps are supposed to be tested. 😕 I can only think of a very low-level approach with a lot of boilerplate code. Implementing a clean set of high-level testing abstractions would be an amazing open source contribution.



#### Styling codebase

I use my own methodology to organize the Sass codebase, so that it is infinitely scalable and prevents leaks. It's a simplified version of BEM with some radical, yet well-thought restrictions.

I gave a talk on it [in Russian](https://www.youtube.com/watch?v=_bpSL71qknY) on the MoscowJS meetup.

Please check out my Sass code style: [app/pods/city/style.sass](https://github.com/lolmaus/intercom-test-assignment/blob/master/app/pods/city/style.sass).



#### Responsive Web Design

This page is responsive and realigns nicely on any viewport size. Try it out!

For RWD in Ember, I typically use my [ember-element-query](https://github.com/lolmaus/ember-element-query) addon. It lets you define responsive CSS rules based on element width, not page width. This lets you implement reusable responsive components, with their responsiveness being agnostic to where you put it in your page layout. Also, RWD styles become so much more concise!

Unfortunately, the element query technique requires JS. It could be worked around in FastBoot if browsers reported viewport width in their HTTP requests, but they don't.

So I had to fallback to media queries which I implement using my know-how: the magnificent [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer). By the way, has whopping 283 stars on GitHub! &lt;/irony>



#### What else could have been done

I had to draw the line somewhere, leaving some features behind. I wish I had more time to implement these:

*   Sorting the customers table by clicking table headers.
*   Using the FastBoot Shoebox to pass data from the build into Ember Data, so that it doesn't have to redownload the data. I have implemented this for [my personal website](http://lolma.us/en/) with a [custom](https://github.com/lolmaus/lolma.us/blob/master/app/instance-initializers/fastboot/ember-data-fastboot.js) [implementation](https://github.com/lolmaus/lolma.us/blob/master/app/instance-initializers/browser/ember-data-fastboot.js) of the [ember-data-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) approach.
*   Due to FastBoot, I had to use a JS-free implementation of the "expand the assignment" checkbox. When Ember boots, it rerenders the HTML, and the checkbox state resets. I didn't resolve this issue here, but on my [personal website](http://lolma.us/en/), I capture the state of all scrollbars and CSS-driven checkboxes and reapply it after the initial rerender. Hopefully, FastBoot eventually becomes capable of reusing the prerendered HTML and this trick becomes unnecessary.
*   Authentication. It would be nice to let you edit cities and customers. It's definitely too much for a test assignment, but on my website I've implemented authentication so that you can star my Ember addons via the GitHub API. Should I implement batch starring as well? :)
*   Accessibility and i18n are two features that are a must for any commercial project.



#### Tools used

For the technologies used in the codebase, see [package.json](https://github.com/lolmaus/intercom-test-assignment/blob/master/package.json).

Here are noteworthy non-codebase tools:

*   [Node 7.2.1](https://nodejs.org/en/)
*   [Yarn](https://yarnpkg.com/) package manager
*   [IntelliJ IDEA](https://www.jetbrains.com/idea/) by JetBrains
*   [Linux Mint](https://linuxmint.com/)
*   [POÄNG](http://www.ikea.com/ie/en/products/sofas-armchairs/armchairs/po%C3%A4ng-armchair-birch-veneer-gr%C3%A4sbo-dark-blue-spr-59150002/) by IKEA



#### Drop me a line!

[lolmaus@gmail.com](mailto:lolmaus@gmail.com)
