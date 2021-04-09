# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await;
## Input

`````js
(class extends Base { await; });
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": {
                        "kind": 279,
                        "expression": {
                            "kind": 81921,
                            "value": "Base",
                            "autofix": 0,
                            "flags": 768,
                            "start": 14,
                            "end": 19
                        },
                        "typeParameter": null,
                        "flags": 128,
                        "start": 14,
                        "end": 19
                    },
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "key": {
                                    "kind": 81921,
                                    "value": "await",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 21,
                                    "end": 27
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 21,
                                "end": 27
                            }
                        ],
                        "flags": 256,
                        "start": 21,
                        "end": 27
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 27
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 31,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "(class extends Base { await; });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28,
            "end": 30
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30,
            "end": 31
        }
    ],
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await;
## Input

`````js
(class extends Base { await; });
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: declaration_paren
> :: case: await;
## Input

`````js
(class extends Base { await; });
`````
```

