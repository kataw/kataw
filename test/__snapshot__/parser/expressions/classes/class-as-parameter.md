# Kataw parser test case

## Input

`````js
var C;

function decorator(el) {
  return Object.assign(el, {
    finisher(Class) {
      C = Class;
    },
  });
}

class A {
  @decorator
  foo() {}
}

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
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "decorator",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 26
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 81921,
                            "value": "el",
                            "autofix": 0,
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 27,
                "end": 30
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 81921,
                                        "value": "Object",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 41,
                                        "end": 48
                                    },
                                    "expression": {
                                        "kind": 81921,
                                        "value": "assign",
                                        "autofix": 0,
                                        "flags": 768,
                                        "start": 49,
                                        "end": 55
                                    },
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 41,
                                    "end": 55
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 81921,
                                            "value": "el",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 56,
                                            "end": 58
                                        },
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 81921,
                                                            "value": "finisher",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 61,
                                                            "end": 74
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
                                                                        "value": "Class",
                                                                        "autofix": 0,
                                                                        "flags": 768,
                                                                        "start": 75,
                                                                        "end": 80
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "autofix": 0,
                                                                    "flags": 256,
                                                                    "start": 75,
                                                                    "end": 80
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 75,
                                                            "end": 81
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 81921,
                                                                                "value": "C",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 83,
                                                                                "end": 91
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 81921,
                                                                                "autofix": 0,
                                                                                "flags": 0,
                                                                                "start": 83,
                                                                                "end": 93
                                                                            },
                                                                            "right": {
                                                                                "kind": 81921,
                                                                                "value": "Class",
                                                                                "autofix": 0,
                                                                                "flags": 768,
                                                                                "start": 93,
                                                                                "end": 99
                                                                            },
                                                                            "autofix": 0,
                                                                            "flags": 256,
                                                                            "start": 83,
                                                                            "end": 99
                                                                        },
                                                                        "autofix": 0,
                                                                        "flags": 128,
                                                                        "start": 83,
                                                                        "end": 100
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "autofix": 0,
                                                                "flags": 256,
                                                                "start": 83,
                                                                "end": 100
                                                            },
                                                            "autofix": 0,
                                                            "flags": 256,
                                                            "start": 81,
                                                            "end": 106
                                                        },
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 74,
                                                        "end": 106
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "multiline": true,
                                                "autofix": 0,
                                                "flags": 1,
                                                "start": 61,
                                                "end": 107
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 59,
                                            "end": 111
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 56,
                                    "end": 111
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 112
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 1,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 32,
                    "end": 113
                },
                "autofix": 0,
                "flags": 256,
                "start": 30,
                "end": 115
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 6,
            "end": 115
        },
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "A",
                "autofix": 0,
                "flags": 768,
                "start": 122,
                "end": 124
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 126,
                "end": 126
            },
            "flags": 128,
            "start": 115,
            "end": 126
        },
        {
            "kind": 178,
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 81921,
                            "value": "decorator",
                            "autofix": 0,
                            "flags": 768,
                            "start": 130,
                            "end": 139
                        },
                        "flags": 1,
                        "start": 130,
                        "end": 139
                    }
                ],
                "flags": 256,
                "start": 130,
                "end": 139
            },
            "name": null,
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 256,
                "start": 126,
                "end": 126
            },
            "flags": 128,
            "start": 126,
            "end": 145
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 149,
                        "end": 149
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 147,
                    "end": 150
                },
                "autofix": 0,
                "flags": 256,
                "start": 145,
                "end": 150
            },
            "autofix": 0,
            "flags": 128,
            "start": 145,
            "end": 150
        }
    ],
    "isModule": false,
    "text": "var C;\n\nfunction decorator(el) {\n  return Object.assign(el, {\n    finisher(Class) {\n      C = Class;\n    },\n  });\n}\n\nclass A {\n  @decorator\n  foo() {}\n}\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 126,
            "end": 130
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 145,
            "end": 146
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 147,
            "end": 149
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 150,
            "end": 152
        }
    ],
    "start": 0,
    "end": 153
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

