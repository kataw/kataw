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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "flags": 128,
            "start": 13,
            "end": 19
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 35,
                            "end": 41
                        },
                        "flags": 128,
                        "start": 35,
                        "end": 41
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 35,
                "end": 41
            },
            "flags": 128,
            "start": 19,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 42,
                "end": 45
            },
            "flags": 128,
            "start": 42,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield /* comment */ { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 19, end: 35
@{x2716}@ Unexpected token. - start: 41, end: 42
@{x2716}@ Unexpected token. - start: 41, end: 42
@{x2716}@ Statement expected - start: 41, end: 42
@{x2716}@ Statement expected - start: 45, end: 47

```

