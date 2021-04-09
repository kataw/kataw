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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67143222,
                    "autofix": 0,
                    "flags": 0,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 81921,
                    "value": 1,
                    "autofix": 0,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 23
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 24
        },
        {
            "kind": 161,
            "expression": {
                "kind": 81921,
                "value": 37,
                "autofix": 0,
                "flags": 768,
                "start": 31,
                "end": 34
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "value": "yield",
                    "autofix": 0,
                    "flags": 768,
                    "start": 35,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 67143222,
                    "autofix": 0,
                    "flags": 0,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 67174403,
                    "value": "dead",
                    "autofix": 0,
                    "flags": 768,
                    "start": 43,
                    "end": 50
                },
                "autofix": 0,
                "flags": 256,
                "start": 35,
                "end": 50
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield * 1; return 37; yield * 'dead';",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 33,
            "error": "A return statement can only be used within a function_body",
            "start": 24,
            "end": 31
        }
    ],
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
'use strict'; yield * 1; return 37; yield * 'dead';
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
'use strict'; yield * 1; return 37; yield * 'dead';
`````
```

