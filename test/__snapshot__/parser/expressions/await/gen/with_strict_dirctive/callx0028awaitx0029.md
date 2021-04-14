# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await)
## Input

`````js
'use strict'; call(await)
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "text": "call",
                    "rawText": "call",
                    "flags": 768,
                    "start": 13,
                    "end": 18
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 81921,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 19,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 19,
                    "end": 24
                },
                "flags": 256,
                "start": 13,
                "end": 25
            },
            "flags": 128,
            "start": 13,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "'use strict'; call(await)",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await)
## Input

`````js
'use strict'; call(await)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await)
## Input

`````js
'use strict'; call(await)
`````
```

