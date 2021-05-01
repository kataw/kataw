# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
'use strict'; yield /* comment */ { yield: 12 }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "original": "yield",
                "text": "yield",
                "rawText": " yield",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "original": "yield",
                            "text": "yield",
                            "rawText": " yield",
                            "flags": 96,
                            "start": 35,
                            "end": 41
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "yield",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 35,
                                "end": 41
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "original": "12",
                                "rawText": " 12",
                                "flags": 96,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 42,
                            "end": 45
                        },
                        "flags": 16,
                        "start": 35,
                        "end": 45
                    }
                ],
                "flags": 16,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "start": 19,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */ { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 19, end: 35

```

