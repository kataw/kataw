# Kataw parser test case

> Auto-generated tests to validate error recovery
>


### Cases

> `````js
> function f(){}
> `````

> `````js
> function *f(){}
> `````

> `````js
> async function f(){}
> `````

> `````js
> async function *f(){}
> `````

> `````js
> function(){}
> `````

### Templates

#### in if

Normal rules do not allow func statements in `if`, but annex B does which explicitly allow the decl here.

https://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement

https://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarations-in-ifstatement-statement-clauses

`````js
if (x) #
`````

#### in else

Normal rules do not allow func statements in `else`, but annex B does which explicitly allow the decl here.

https://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement

https://www.ecma-international.org/ecma-262/6.0/#sec-functiondeclarations-in-ifstatement-statement-clauses

`````js
if (x) x;
else #
`````

#### in block

Blocks allow function declarations.

`````js
{
  #
}
`````

#### in do one line

It's actually never allowed here. The `for` sub statement can not be a declaration and
annex B has no exception for `for`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
do # while (x);
`````

#### in do two lines

It's actually never allowed here. The `for` sub statement can not be a declaration and
annex B has no exception for `for`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
do #
while (x);
`````

#### in for-loop

It's actually never allowed here. The `for` sub statement can not be a declaration and
annex B has no exception for `for`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
for (;;) #
`````

#### in for-in-loop

It's actually never allowed here. The `for` sub statement can not be a declaration and
annex B has no exception for `for`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
for (a in b) #
`````

#### in for-of-loop

It's actually never allowed here. The `for` sub statement can not be a declaration and
annex B has no exception for `for`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
for (a of b) #
`````

#### in case

The case "body" is a `StatementList`, which is either a `Statement` or a `Declaration`.
So func decls are allowed in `switch` cases in any sloppy mode.

https://www.ecma-international.org/ecma-262/6.0/#sec-block

https://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement

`````js
switch (x) {
  case foo:
    #
}
`````

#### in default

The case "body" is a `StatementList`, which is either a `Statement` or a `Declaration`.
So func decls are allowed in `switch` defaults in any sloppy mode.

https://www.ecma-international.org/ecma-262/6.0/#sec-block

https://www.ecma-international.org/ecma-262/6.0/#sec-switch-statement

`````js
switch (x) {
  default:
    #
}
`````

#### in try

The `try` body is a block so function statements are okay here.

`````js
try {
  #
} catch (e) {
}
`````

#### in catch

The `catch` body is a block so function statements are okay here.

`````js
try {
} catch (e) {
  #
}
`````

#### in finally

The `finally` body is a block so function statements are okay here.

`````js
try {
} finally {
  #
}
`````

#### in while

It's actually never allowed here. The `while` sub statement can not be a declaration and
annex B has no exception for `while`, either.

https://www.ecma-international.org/ecma-262/6.0/#sec-statement-rules

`````js
while (x) #
`````
## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 67109115,
                    "text": "#",
                    "flags": 768,
                    "start": 6,
                    "end": 8
                },
                "flags": 128,
                "start": 6,
                "end": 8
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 128,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "if (x) #",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

