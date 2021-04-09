# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async async => {}
## Input

`````js
foo(async async => {}).bar
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
                                            "start": 9,
                                            "end": 15
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 4,
                                        "end": 15
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
                                        "start": 20,
                                        "end": 20
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 18,
                                    "end": 21
                                },
                                "autofix": 0,
                                "flags": 2304,
                                "start": 4,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 22
                },
                "expression": {
                    "kind": 81921,
                    "value": "bar",
                    "autofix": 0,
                    "flags": 768,
                    "start": 23,
                    "end": 26
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "foo(async async => {}).bar",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async async => {}
## Input

`````js
foo(async async => {}).bar
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: l
> :: test: call tail
> :: case: async async => {}
## Input

`````js
foo(async async => {}).bar
`````
```

