# Introduction
This is a simple GUI puzzle solver for the newly released Verity encounter in Destiny 2's Salvation's Edge raid, made using React and SASS. Other people made their own solvers before me, but I either found their GUI difficult to use or the code was a mess, so I got my hands dirty. 

# Algorithm
The logic for the solver was made using TrueVanguard's guide for the encounter.

As such, it'll get to each correct final symbol on the outsibe by "subtracting" the unneeded symbol from the currently working statue with the needed one from any of the other two, based on both it being the symbol that the current statue needs and that statue not needing that specific symbol.

## Example
The encounter starts with the following:

| Position | Inside symbols | Outside symbols |
|:---------|:---------------|:----------------|
| Left     | Circle         |  Cylinder       |
| Middle   | Square         |  Prism          | 
| Right    | Triangle       |  Cone           | 

The solver will output the following  instructions:

| Position | Dissect  | Shape |
|:---------|:---------|:-----:|
| Left     | Circle   | ○     |
| Right    | Triangle | △     |
| Middle   | Square   | □     |
| Right    | Circle   | ○     |