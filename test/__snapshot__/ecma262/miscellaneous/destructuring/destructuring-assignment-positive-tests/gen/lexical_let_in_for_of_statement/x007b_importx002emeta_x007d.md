# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/lexical_let_in_for_of_statement
> :: test: lexical let in for of statement
> :: case: { import.meta }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let x, y, z; for (x of { import.meta } = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 17,
                        "end": 19
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 23,
                            "end": 25
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 23,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 25
            },
            "flags": 33554448,
            "start": 13,
            "end": 26
        },
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 26,
                "end": 30
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "expression": {
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
                                "start": 38,
                                "end": 45
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 38,
                        "end": 45
                    },
                    "flags": 48,
                    "start": 36,
                    "end": 45
                },
                "expression": {
                    "kind": 134299649,
                    "text": "meta",
                    "rawText": "meta",
                    "flags": 96,
                    "start": 46,
                    "end": 50
                },
                "flags": 48,
                "start": 36,
                "end": 50
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 50,
                    "end": 50
                },
                "flags": 16,
                "start": 50,
                "end": 50
            },
            "flags": 80,
            "start": 26,
            "end": 50
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 56,
                "end": 56
            },
            "flags": 16,
            "start": 54,
            "end": 57
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 58,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "'use strict'; let x, y, z; for (x of { import.meta } = {});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 45, end: 46
✖ ',' expected - start: 45, end: 46
✖ Expected a ')' to match the '(' token here - start: 51, end: 52
✖ Declaration or statement expected - start: 52, end: 54
✖ Declaration or statement expected - start: 57, end: 58

```

