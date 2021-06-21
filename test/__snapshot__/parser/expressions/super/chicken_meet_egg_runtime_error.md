# Kataw parser test case

## Input

`````js
class x extends y { constructor() { super(this); } }
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
                "flags": 80,
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
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 32,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 96,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 41
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 4276321,
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 42,
                                                        "end": 46
                                                    },
                                                    "flags": 268435488,
                                                    "start": 35,
                                                    "end": 47
                                                },
                                                "flags": 16,
                                                "start": 35,
                                                "end": 48
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 50
                                },
                                "flags": 2048,
                                "start": 31,
                                "end": 50
                            },
                            "flags": 2048,
                            "start": 19,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 50
                },
                "flags": 7,
                "start": 32,
                "end": 52
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor() { super(this); } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

class x  {
  constructor() {
    super(this);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

