# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield 3 + yield 4;
## Input

`````js
'use strict'; yield 3 + yield 4;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
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
                "kind": 81921,
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
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 81921,
                    "text": 3,
                    "rawText": "3",
                    "flags": 768,
                    "start": 19,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 81921,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 23,
                    "end": 29
                },
                "flags": 256,
                "start": 19,
                "end": 29
            },
            "flags": 128,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": 4,
                "rawText": "4",
                "flags": 768,
                "start": 29,
                "end": 31
            },
            "flags": 128,
            "start": 29,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield 3 + yield 4;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29,
            "end": 31
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield 3 + yield 4;
## Input

`````js
'use strict'; yield 3 + yield 4;
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield 3 + yield 4;
## Input

`````js
'use strict'; yield 3 + yield 4;
`````
```

