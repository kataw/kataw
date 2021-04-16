# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: class-expr
> :: case: static *async(){}
## Input

`````js
(class { static *async(){} });
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": {
                                    "kind": 8388716,
                                    "flags": 768,
                                    "start": 8,
                                    "end": 15
                                },
                                "key": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 15,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 15,
                                "end": 17
                            },
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 768,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 23,
                                        "end": 24
                                    },
                                    "type": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 25
                                        },
                                        "flags": 256,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 26
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 28
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 28
                },
                "flags": 256,
                "start": 0,
                "end": 29
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "(class { static *async(){} });",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 18,
            "error": "A rest element cannot have an initializer",
            "start": 15,
            "end": 17
        }
    ],
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

