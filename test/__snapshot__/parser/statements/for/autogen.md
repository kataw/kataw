# Tenko parser test cases

- Path: zeparser3/tests/testcases/for_statement/for-in/webcompat_regressions_x00238/autogen.md

> :: for statement : for-in
>
> ::> webcompat regressions #8
>
> In web compat assignments are allowed in the lhs of a `for-in` with `var` decl (but that's it)
>
> https://tc39.github.io/ecma262/#sec-initializers-in-forin-statement-heads
>
> As reported by https://github.com/pvdz/zeparser3/issues/8

These cases are automatically extrapolated and written to their own file.
Each case is applied to each test by simply replacing `#` with the actual case.

## Input

### Cases

TODO: this is a legacy autogen because in the old system tests weren't called
with web but in the new they are and these autogens were for both. So I need
to move them to their own test files and then drop this file.

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

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 166,
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "argument": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 10
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 10
                        }
                    ],
                    "trailingComma": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 6,
                    "end": 11
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 12
            },
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 18,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 17,
                            "end": 19
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 17,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 15,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 21,
                "end": 22
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for ([...x,] in [[]]);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 15,
            "end": 17
        }
    ],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

