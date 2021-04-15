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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "C",
                            "rawText": "C",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 6,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "decorator",
                "rawText": "decorator",
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
                            "kind": 134299649,
                            "text": "el",
                            "rawText": "el",
                            "flags": 768,
                            "start": 27,
                            "end": 29
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 256,
                        "start": 27,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 26,
                "end": 30
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 32,
                                "end": 41
                            },
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "Object",
                                        "rawText": "Object",
                                        "flags": 768,
                                        "start": 41,
                                        "end": 48
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "assign",
                                        "rawText": "assign",
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
                                            "kind": 134299649,
                                            "text": "el",
                                            "rawText": "el",
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
                                                            "kind": 134299649,
                                                            "text": "finisher",
                                                            "rawText": "finisher",
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
                                                                        "kind": 134299649,
                                                                        "text": "Class",
                                                                        "rawText": "Class",
                                                                        "flags": 768,
                                                                        "start": 75,
                                                                        "end": 80
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": null,
                                                                    "flags": 256,
                                                                    "start": 75,
                                                                    "end": 80
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 75,
                                                            "end": 81
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
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 134299649,
                                                                                "text": "C",
                                                                                "rawText": "C",
                                                                                "flags": 768,
                                                                                "start": 83,
                                                                                "end": 91
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 768,
                                                                                "start": 91,
                                                                                "end": 93
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "Class",
                                                                                "rawText": "Class",
                                                                                "flags": 768,
                                                                                "start": 93,
                                                                                "end": 99
                                                                            },
                                                                            "flags": 256,
                                                                            "start": 83,
                                                                            "end": 99
                                                                        },
                                                                        "flags": 128,
                                                                        "start": 83,
                                                                        "end": 100
                                                                    }
                                                                ],
                                                                "multiline": true,
                                                                "flags": 256,
                                                                "start": 83,
                                                                "end": 100
                                                            },
                                                            "flags": 256,
                                                            "start": 81,
                                                            "end": 106
                                                        },
                                                        "flags": 256,
                                                        "start": 74,
                                                        "end": 106
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "multiline": true,
                                                "flags": 1,
                                                "start": 61,
                                                "end": 107
                                            },
                                            "flags": 256,
                                            "start": 59,
                                            "end": 111
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 56,
                                    "end": 111
                                },
                                "flags": 256,
                                "start": 41,
                                "end": 112
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 32
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 32,
                    "end": 113
                },
                "flags": 256,
                "start": 30,
                "end": 115
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 6,
            "end": 115
        },
        {
            "kind": 178,
            "decorators": null,
            "classKeyword": {
                "kind": 37814352,
                "flags": 768,
                "start": 115,
                "end": 122
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
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
                            "kind": 134299649,
                            "text": "decorator",
                            "rawText": "decorator",
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
            "classKeyword": null,
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
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 149,
                    "end": 149
                },
                "flags": 256,
                "start": 145,
                "end": 149
            },
            "flags": 128,
            "start": 145,
            "end": 149
        }
    ],
    "isModule": false,
    "text": "var C;\n\nfunction decorator(el) {\n  return Object.assign(el, {\n    finisher(Class) {\n      C = Class;\n    },\n  });\n}\n\nclass A {\n  @decorator\n  foo() {}\n}\n",
    "fileName": "__root__",
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
            "start": 139,
            "end": 145
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
            "code": 3,
            "error": "Identifier expected",
            "start": 149,
            "end": 150
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 149,
            "end": 150
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

