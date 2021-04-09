# Kataw parser test case

## Input

`````js
class x { foo(x=super.foo){ }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "value": "x",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 225,
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 16,
                                                "end": 21
                                            },
                                            "expression": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 16,
                                            "end": 25
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 14,
                                "end": 26
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 27
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 26,
                                "end": 29
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 13,
                            "end": 29
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 29
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "class x { foo(x=super.foo){ }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

