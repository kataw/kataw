# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get x() {}
## Input

`````js
class C extends Base { static get x() {} }
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
                "value": "C",
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
                    "value": "Base",
                    "autofix": 0,
                    "flags": 768,
                    "start": 15,
                    "end": 20
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 20
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": {
                            "kind": 8388716,
                            "autofix": 0,
                            "flags": 0,
                            "start": 22,
                            "end": 29
                        },
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 33,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
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
                                    "start": 39,
                                    "end": 39
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 40
                            },
                            "autofix": 0,
                            "flags": 8192,
                            "start": 35,
                            "end": 40
                        },
                        "flags": 256,
                        "start": 29,
                        "end": 40
                    }
                ],
                "flags": 256,
                "start": 22,
                "end": 42
            },
            "flags": 128,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "class C extends Base { static get x() {} }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get x() {}
## Input

`````js
class C extends Base { static get x() {} }
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: class-decl-extends
> :: case: static get x() {}
## Input

`````js
class C extends Base { static get x() {} }
`````
```

