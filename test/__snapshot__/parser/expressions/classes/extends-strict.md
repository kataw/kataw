# Kataw parser test case

## Input

`````js
var C;

class C extends (function B() {
  with ({});
  return B;
}()) {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "C",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "C",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 131,
                        "expression": {
                            "kind": 177,
                            "asyncToken": null,
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "B",
                                "autofix": 0,
                                "flags": 768,
                                "start": 33,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 36,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [
                                        {
                                            "kind": 153,
                                            "expression": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 49,
                                                    "end": 49
                                                },
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 48,
                                                "end": 50
                                            },
                                            "statement": {
                                                "kind": 168,
                                                "autofix": 0,
                                                "flags": 128,
                                                "start": 51,
                                                "end": 52
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 39,
                                            "end": 52
                                        },
                                        {
                                            "kind": 161,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "B",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 61,
                                                "end": 63
                                            },
                                            "autofix": 0,
                                            "flags": 128,
                                            "start": 1,
                                            "end": 52
                                        }
                                    ],
                                    "multiline": true,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 64
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 66
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 256,
                            "start": 25,
                            "end": 66
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 67,
                            "end": 67
                        },
                        "flags": 256,
                        "start": 25,
                        "end": 68
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 23,
                    "end": 69
                },
                "typeParameter": null,
                "flags": 128,
                "start": 23,
                "end": 69
            },
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 71,
                "end": 72
            },
            "flags": 128,
            "start": 6,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "var C;\n\nclass C extends (function B() {\n  with ({});\n  return B;\n}()) {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 75,
            "error": "'with' statements are not allowed in strict mode.",
            "start": 39,
            "end": 46
        }
    ],
    "start": 0,
    "end": 72
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

