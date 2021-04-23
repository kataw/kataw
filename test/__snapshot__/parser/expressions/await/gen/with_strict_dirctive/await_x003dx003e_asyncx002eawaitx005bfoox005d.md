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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 19,
                    "end": 22
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
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
                            "kind": 134299649,
                            "text": "async",
                            "rawText": "async",
                            "flags": 768,
                            "start": 22,
                            "end": 28
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
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
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 35,
                        "end": 38
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 39
                },
                "flags": 256,
                "start": 13,
                "end": 39
            },
            "flags": 128,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "'use strict'; await => async.await[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

