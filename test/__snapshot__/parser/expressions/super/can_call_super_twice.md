# Kataw parser test case

## Input

`````js
class x extends y { constructor() { super.mom; super.mom; } }
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
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
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
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 35,
                                                            "end": 41
                                                        },
                                                        "flags": 96,
                                                        "start": 35,
                                                        "end": 41
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "mom",
                                                        "rawText": "mom",
                                                        "flags": 96,
                                                        "start": 42,
                                                        "end": 45
                                                    },
                                                    "flags": 536870944,
                                                    "start": 35,
                                                    "end": 45
                                                },
                                                "flags": 16,
                                                "start": 35,
                                                "end": 46
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 0,
                                                            "start": 46,
                                                            "end": 52
                                                        },
                                                        "flags": 96,
                                                        "start": 46,
                                                        "end": 52
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "mom",
                                                        "rawText": "mom",
                                                        "flags": 96,
                                                        "start": 53,
                                                        "end": 56
                                                    },
                                                    "flags": 536870944,
                                                    "start": 46,
                                                    "end": 56
                                                },
                                                "flags": 16,
                                                "start": 46,
                                                "end": 57
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 57
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 59
                                },
                                "flags": 0,
                                "start": 31,
                                "end": 59
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 59
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 59
                },
                "flags": 7,
                "start": 32,
                "end": 61
            },
            "flags": 16,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "class x extends y { constructor() { super.mom; super.mom; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

class x  {
  constructor() {
    .mom;
    .mom;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

