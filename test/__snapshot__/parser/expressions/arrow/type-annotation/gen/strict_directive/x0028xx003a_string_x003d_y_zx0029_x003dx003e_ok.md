# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: strict directive
> :: case: (x: string = y, z) => ok
## Options

`````js
{}
`````
## Input

`````js
"use strict"; (x: string = y, z) => ok
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "start": 13,
                    "end": 16
                },
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "flags": 16,
            "start": 13,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "string",
                            "rawText": "string",
                            "flags": 96,
                            "start": 17,
                            "end": 24
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 17,
                        "end": 28
                    },
                    {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    }
                ],
                "flags": 32,
                "start": 17,
                "end": 31
            },
            "flags": 16,
            "start": 17,
            "end": 31
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "ok",
                "rawText": "ok",
                "flags": 96,
                "start": 35,
                "end": 38
            },
            "flags": 16,
            "start": 35,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (x: string = y, z) => ok",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 17
✖ Expected a `;` - start: 31, end: 32
✖ Declaration or statement expected - start: 32, end: 35

```

