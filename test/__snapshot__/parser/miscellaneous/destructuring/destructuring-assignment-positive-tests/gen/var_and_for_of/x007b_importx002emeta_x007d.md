# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/var_and_for_of
> :: test: var and for of
> :: case: { import.meta }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; for (x of x = { import.meta } = z = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 12,
                "end": 16
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 22,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 24,
                    "end": 26
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "import",
                                    "rawText": "import",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 35
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 28,
                            "end": 35
                        },
                        "flags": 48,
                        "start": 26,
                        "end": 35
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "meta",
                        "rawText": "meta",
                        "flags": 96,
                        "start": 36,
                        "end": 40
                    },
                    "flags": 536870944,
                    "start": 26,
                    "end": 40
                },
                "flags": 32,
                "start": 22,
                "end": 40
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 40,
                    "end": 40
                },
                "flags": 16,
                "start": 40,
                "end": 40
            },
            "flags": 80,
            "start": 12,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 44,
                    "end": 46
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 46,
                    "end": 48
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 50,
                        "end": 50
                    },
                    "flags": 48,
                    "start": 48,
                    "end": 51
                },
                "flags": 32,
                "start": 44,
                "end": 51
            },
            "flags": 16,
            "start": 44,
            "end": 51
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 52,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x of x = { import.meta } = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 35, end: 36
✖ ',' expected - start: 35, end: 36
✖ Expected a ')' to match the '(' token here - start: 41, end: 42
✖ Declaration or statement expected - start: 42, end: 44
✖ Expected a `;` - start: 51, end: 52

```

