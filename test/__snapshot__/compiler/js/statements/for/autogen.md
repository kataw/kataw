# Tenko parser test cases

## Input

### Cases

> `````js
> false
> `````

### Templates

#### lhs rest with trailing comma

`````js
for ([...x,] in [[]]);
`````

#### lhs empty arr with number init

`````js
for ([] = 0 in {});
`````

#### lhs arr with rest with number init

`````js
for ([...[a]] = 0 in {});
`````

#### lhs obj with init

`````js
for ({x} = 0 in {});
`````

#### lhs obj with prop init

`````js
for ({p: x = 0} = 0 in {});
`````

#### for await with arr destruct lhs

`````js
async function f() { for await ([x] in y) {} }
`````

#### for await with obj destruct lhs

`````js
async function f() { for await ({x} in y) {} }
`````

#### for await with valid strange lhs

`````js
async function f() { for await ("foo".x in y) {} }
`````

#### for await with valid grouped lhs

`````js
async function f() { for await ((x) in y) {} }
`````

#### for await with var

`````js
async function f() { for await (var x in y) {} }
`````

#### for await with let

`````js
async function f() { for await (let x in y) {} }
`````

#### for await with const

`````js
async function f() { for await (const x in y) {} }
`````

#### lhs assignment

`````js
for (x = 0 in {});
`````

#### lhs dynamic property assignment

`````js
for(o[0] = 0 in {});
`````

#### lhs paren wrapped unary increment

`````js
for ((a++) in c);
`````

#### lhs plus-prefixed expr

`````js
for (+a().b in c);
`````

#### lhs is void

`````js
for (void a.b in c);
`````

#### lhs is regex

`````js
for (/foo/ in {});
`````

#### sneaky lhs contains `in`

`````js
for ((a in b).x in {});
`````
