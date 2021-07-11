# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: (_a = foo, foo = _a.foo, bar = _a.bar);
## Options

`````js
{}
`````
## Input

`````js
(_a = foo, foo = _a.foo, bar = _a.bar);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "_a",
                                "rawText": "_a",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 5,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 9
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "right": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "_a",
                                    "rawText": "_a",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 23
                                },
                                "flags": 96,
                                "start": 16,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 23
                        },
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 24,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "right": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "_a",
                                    "rawText": "_a",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 33
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 34,
                                    "end": 37
                                },
                                "flags": 96,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 38
                },
                "flags": 32,
                "start": 0,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "(_a = foo, foo = _a.foo, bar = _a.bar);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

( _a = foo, foo = _a.foo, bar = _a.bar );

```

### Diagnostics

```javascript
✔ No errors
```

