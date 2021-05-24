# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: s
> :: test: as static setter in class
> :: case: implements
## Input

`````js
class x {static set implements(x){}}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 15
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 15,
                                "end": 19
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "implements",
                                    "rawText": "implements",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 30
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 31,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 31,
                                    "end": 33
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 512,
                                "start": 30,
                                "end": 35
                            },
                            "flags": 512,
                            "start": 15,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "class x {static set implements(x){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

class x {
  static set static implements(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

