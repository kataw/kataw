# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/stand-alone
> :: test: stand-alone
> :: case: x, [foo + y, bar] = zoo;
## Options

`````js
{}
`````
## Input

`````js
x, [foo + y, bar] = zoo;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 125,
                        "left": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 4,
                                            "end": 7
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "flags": 32,
                                        "start": 4,
                                        "end": 11
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 23
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "x, [foo + y, bar] = zoo;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 17, end: 19

```

