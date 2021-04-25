# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
'use strict'; yield * 1; return 37; yield * 'dead';
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "flags": 256,
                "start": 13,
                "end": 23
            },
            "flags": 128,
            "start": 13,
            "end": 24
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 768,
                "start": 24,
                "end": 31
            },
            "expression": {
                "kind": 201392130,
                "text": 37,
                "rawText": "37",
                "flags": 768,
                "start": 31,
                "end": 34
            },
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 35,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 201392131,
                    "text": "dead",
                    "rawText": "dead",
                    "flags": 67109632,
                    "start": 43,
                    "end": 50
                },
                "flags": 256,
                "start": 35,
                "end": 50
            },
            "flags": 128,
            "start": 35,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield * 1; return 37; yield * 'dead';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ A return statement can only be used within a function_body - start: 24, end: 31

```

