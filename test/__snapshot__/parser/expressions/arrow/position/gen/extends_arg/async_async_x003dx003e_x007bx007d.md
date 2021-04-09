# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async async => {}
## Input

`````js
class A extends async async => {} {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
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
                                "start": 21,
                                "end": 27
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 15,
                            "end": 27
                        }
                    ],
                    "asyncToken": {
                        "kind": 82031,
                        "autofix": 0,
                        "flags": 0,
                        "start": 15,
                        "end": 21
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
                            "start": 32,
                            "end": 32
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 30,
                        "end": 33
                    },
                    "autofix": 0,
                    "flags": 2304,
                    "start": 15,
                    "end": 33
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 33
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 35,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "class A extends async async => {} {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async async => {}
## Input

`````js
class A extends async async => {} {}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: extends arg
> :: case: async async => {}
## Input

`````js
class A extends async async => {} {}
`````
```

