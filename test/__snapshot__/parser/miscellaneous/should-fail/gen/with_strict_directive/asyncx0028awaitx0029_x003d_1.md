# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: with strict directive
> :: case: async(await) = 1
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async(await) = 1
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
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "start": 20,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "flags": 268435488,
            "start": 13,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 1,
                "rawText": "1",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "flags": 16,
            "start": 28,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async(await) = 1",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 26, end: 28

```

