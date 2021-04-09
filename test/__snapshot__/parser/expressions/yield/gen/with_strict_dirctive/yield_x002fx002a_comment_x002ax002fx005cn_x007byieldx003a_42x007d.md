# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
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
                "kind": 81921,
                "value": "yield",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": "n",
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 35
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 81921,
                            "value": "yield",
                            "autofix": 0,
                            "flags": 768,
                            "start": 37,
                            "end": 42
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 37,
                        "end": 42
                    }
                ],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 37,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 42,
                "autofix": 0,
                "flags": 768,
                "start": 43,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 43,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield /* comment */\\n {yield: 42}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19,
            "end": 34
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 37
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 42,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 46,
            "end": 47
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
`````
```

