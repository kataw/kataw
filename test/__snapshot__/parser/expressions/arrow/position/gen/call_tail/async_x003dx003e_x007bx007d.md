# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async => {}
## Input

`````js
foo(async => {}).bar
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
                "kind": 129,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 81921,
                        "value": "foo",
                        "autofix": 0,
                        "flags": 768,
                        "start": 0,
                        "end": 3
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "async",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 4,
                                            "end": 9
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 9
                                    }
                                ],
                                "asyncToken": {
                                    "kind": 82031,
                                    "autofix": 0,
                                    "flags": 0,
                                    "start": 4,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "statements": [],
                                        "multiline": false,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 15
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 4,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
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
                    "value": "bar",
                    "autofix": 0,
                    "flags": 768,
                    "start": 17,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "foo(async => {}).bar",
    "fileName": "__root__",
    "autofix": 0,
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
> :: case: async => {}
## Input

`````js
foo(async => {}).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async => {}
## Input

`````js
foo(async => {}).bar
`````
```

