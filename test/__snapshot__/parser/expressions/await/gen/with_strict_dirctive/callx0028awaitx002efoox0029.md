# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await.foo)
## Input

`````js
'use strict'; call(await.foo)
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
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "call",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 18
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 81921,
                                "value": "await",
                                "autofix": 0,
                                "flags": 768,
                                "start": 19,
                                "end": 24
                            },
                            "expression": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 25,
                                "end": 28
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 19,
                    "end": 28
                },
                "flags": 256,
                "start": 13,
                "end": 29
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "'use strict'; call(await.foo)",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await.foo)
## Input

`````js
'use strict'; call(await.foo)
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: call(await.foo)
## Input

`````js
'use strict'; call(await.foo)
`````
```

