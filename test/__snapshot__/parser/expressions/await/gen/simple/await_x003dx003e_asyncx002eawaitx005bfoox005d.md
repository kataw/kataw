# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: await => async.await[foo]
## Input

`````js
await => async.await[foo]
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 768,
                    "start": 5,
                    "end": 8
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "await",
                    "rawText": "await",
                    "flags": 768,
                    "start": 0,
                    "end": 5
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
                            "start": 8,
                            "end": 14
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 15,
                            "end": 20
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 8,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 21,
                        "end": 24
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 25
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "await => async.await[foo]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

