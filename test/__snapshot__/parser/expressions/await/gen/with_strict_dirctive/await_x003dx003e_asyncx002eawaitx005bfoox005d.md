# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[foo]
## Input

`````js
'use strict'; await => async.await[foo]
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
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "await",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 19
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 130,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 81921,
                            "value": "async",
                            "autofix": 0,
                            "flags": 768,
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 81921,
                            "value": "await",
                            "autofix": 0,
                            "flags": 768,
                            "start": 29,
                            "end": 34
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 22,
                        "end": 34
                    },
                    "expression": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 35,
                        "end": 38
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 22,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "'use strict'; await => async.await[foo]",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[foo]
## Input

`````js
'use strict'; await => async.await[foo]
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: await => async.await[foo]
## Input

`````js
'use strict'; await => async.await[foo]
`````
```

