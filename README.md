# mulitple-nerdlets-example

This repo and the [single-nerdlet-example](https://github.com/JuliaNocera/single-nerdlet-example) repo are meant to show a working example of how you can use multiple nerdlets in the same "view", even across repos, in New Relic One. 

## Getting started

To run this example locally, you will need to run this and the [single-nerdlet-example](https://github.com/JuliaNocera/single-nerdlet-example) repo locally at the same time. Also, since these are associated with my UUID, you will need to generate a new UUID for each and update the constants which reference the UUIDs in the `src/NavBar.jsx` file in both repos.

Run the following:

```
nr1 nerdpack:clone -r https://github.com/JuliaNocera/mulitple-nerdlets-example.git
cd multiple-nerdlets-example
npm install
npm start
```

After running the above commands, find your new UUID in the root `nr1.json` file. Use this UUID to replace the constant value for  `MULTIPLE_NERDLETS_EXAMPLE_NERDPACK_ID` in `src/NavBar.jsx`.

Now go to the [single-nerdlet-example](https://github.com/JuliaNocera/single-nerdlet-example) repo and run that locally, following the ReadMe instructions there.

Visit https://one.newrelic.com/?nerdpacks=local and :sparkles:


## Demo gif

In the below demo I am navigating between different nerdlets. The buttons `one` | `two` | `three` are opening nerdlets in this repo. The button `four` opens a nerdlet in a different Nerdpack repo, [here](https://github.com/JuliaNocera/single-nerdlet-example/tree/main/nerdlets/home). 

_Note: This is a very simple implementation of this approach. Of course, if I were going to continue this direction, I would add a shared library for the Header and Nav components and any other components which come up along the way and are shared between the repos._

![multiple_nerdlets_demo](https://user-images.githubusercontent.com/12112563/128580070-eb36eff3-6ebd-40b0-8a86-8b6169ce65ec.gif)

