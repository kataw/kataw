# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */
## Input

`````js
'use strict'; yield /* comment */
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
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield /* comment */",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */
## Input

`````js
'use strict'; yield /* comment */
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */
## Input

`````js
'use strict'; yield /* comment */
`````
```

