# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async
## Input

`````js
'use strict'; await => async
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 19,
                    "end": 22
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "text": "await",
                    "rawText": "await",
                    "flags": 768,
                    "start": 13,
                    "end": 19
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 81921,
                    "text": "async",
                    "rawText": "async",
                    "flags": 768,
                    "start": 22,
                    "end": 28
                },
                "flags": 256,
                "start": 13,
                "end": 28
            },
            "flags": 128,
            "start": 13,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "'use strict'; await => async",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async
## Input

`````js
'use strict'; await => async
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async
## Input

`````js
'use strict'; await => async
`````
```

