# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async => ok
## Input

`````js
foo(async => ok).bar
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
                "kind": 129,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 9,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "text": "async",
                                            "rawText": "async",
                                            "flags": 768,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 9
                                    }
                                ],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 768,
                                    "start": 4,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 81921,
                                    "text": "ok",
                                    "rawText": "ok",
                                    "flags": 768,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 2304,
                                "start": 4,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 4,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 81921,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 768,
                    "start": 17,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "foo(async => ok).bar",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async => ok
## Input

`````js
foo(async => ok).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async => ok
## Input

`````js
foo(async => ok).bar
`````
```

