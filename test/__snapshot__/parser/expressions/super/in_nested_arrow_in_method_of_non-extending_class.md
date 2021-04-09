# Kataw parser test case

## Input

`````js
class x extends y { foo(){ return () => () => super.foo; }}
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
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 81921,
                    "value": "y",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
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
                                "start": 19,
                                "end": 23
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 24,
                                "end": 25
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "expression": {
                                                "kind": 271,
                                                "typeParameters": null,
                                                "parameters": [],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 271,
                                                    "typeParameters": null,
                                                    "parameters": [],
                                                    "asyncToken": null,
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 225,
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 45,
                                                            "end": 51
                                                        },
                                                        "expression": {
                                                            "kind": 81921,
                                                            "value": "foo",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 52,
                                                            "end": 55
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 45,
                                                        "end": 55
                                                    },
                                                    "autofix": 0,
                                                    "flags": 256,
                                                    "start": 39,
                                                    "end": 55
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 33,
                                                "end": 55
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 0,
                                            "end": 26
                                        }
                                    ],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 26,
                                    "end": 56
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 58
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 58
                        },
                        "flags": 256,
                        "start": 19,
                        "end": 58
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 59
            },
            "flags": 128,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "class x extends y { foo(){ return () => () => super.foo; }}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

