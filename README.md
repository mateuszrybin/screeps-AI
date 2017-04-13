# My Jernly to building a Screeps AI
After reading Peak: Secrets from the New Science of Expertise, I decided to develop a delibrate coding practice. I also wanted to try a new development setup. This setup was without any tools and extra things except Vim plugin for Atom. I normly use Vim and Tmux but I wanted to try something new after lisisng to FunFunFunction's video.

My goal with this serie is to work delivralty on my coding skills and adapt a more fantuctional style in JS.

0. What is Screeps?
Screeps is a programing game. Your job is to create a base, gateher resurces, and defend agaisn other players and NPC's.

What make it special is that your job is to create a Atefical Intellnce that can do all those things without your input. So what basicly it means is that you create a javascript file and every turn in the game, this script is exceuted.

What I love most about this game is that when you die, you can just start another base somewhere else and you can see your base start to grow again. You anyls what when wrong last time, with the replay function, and to improve your code.

1. Setup
The basic way Screeps work is that you have a 'main.js' file. In this file you put your commands and they are exceuted every turn in the game. Problem is that I want to include liblrlys like ramda. So I need to use a module bundler like Webpack.

What I do is setup a package.json file with labirliy I need.

Next I create a webpack.config.js file that transform all files in src into a main.js file at root.

2. Testing

I really like a article by Eric Elliott, https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d#.w460noahh.

This article describles 5 question checklist for every unit test. I will try to follow this format.

For testing I will use Tape witch is a really simple and straitforward testing framework. Here is a great article why this framework is better then Mocha and other frameworks.

So I create a src/test folder where I will include all the tests.

3. My aproch to the Screeps Problem
You create a base. This base creates Creeps that live for 10 min. In those 10 min the Creeps can gather resruces, kill enamies and explore there surandings.

There are many way to go about this problem. My approch is to create a free market system where there exists independed comapnies that have a specfic task to perform. So the Mining Corp will deal with maining resruces. Transport Corp will deal with transporting those resruces. Creep Corp will deal with building Creeps. Contrstrction Corp will deal with buildings.

So every sector will have indevidual comapnies. Then there will exists major compnaines called Industries. So Mining Industry will cover all comapnies that are maining companines.

So for exemple if an other player attacks me, the Transport Industry can give a command to all Transport Corp's to start to trasnport resrucess to the sector that is being attacked.

4. Install Autocomplete for Screeps
So before I being I need to install Autocomplete for Screeps.

I found this repo: https://github.com/Garethp/ScreepsAutocomplete

So I install atom-ternjs.

I clone repo into project. git clone https://github.com/Garethp/ScreepsAutocomplete.git

And I create a .tern-project file with right info.

4. My first Corpration
So my first task will be to create Creep Corp.

This corparation's goal is to create Creeps.

The simples way to do it is to write in the console:

Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE], 'mining-corp-54364')

Spawn1 - Refers to the spawn building. You can only have one per section.

createCreep - The first attrebute is the features you want the creep to have. The other is the name.

So my idea is to create a ordering system. All the other Corps will send a requrest for a creep of there choose.

So when a maining corp want more creeps he sends a request for that.

This request will be store in a order system and one after one will be exceuted.

So it kind of stupid in the begining. The system will only store 3 order from each corp. Those orders will be
 exceuted in type order. So first corp 1, then corp 2, then corp 3, and then corp 1 again. To make sure that Creeps are evenly
 distrebtuted.

 Later I want to have a Information Corp that gives priorites for witch Creeps should be created. A mining Corparation should only know what they need to do their job. The same for Creep Corp. Creep Corp shouldn't check their sector for things that have nothing to do with their job. Instead I want a Info Corp that gives Creep Corp that info.

 So my first taks is to create a function that allows corps to send orders.

 So I create a creep-corp folder in test.

 So my first test will be resive order and outputting log.

5. Create first test
So I go to creep-corp folder and create first test: receive-order.js

**So what I'm testing?**
That creep-corp receive order function.

**What should it do?**
its should add a new order to its order queue.

**What is the actual output?**
creep-corp have a new order inside its memory queue.

**What is the expected output?**
That the memory queue object is one more item in length.

So lets get started.

First I create a creep folder inside corp folder. I need also to make tape work.

My next task tommrow is to make tape work with this project.
