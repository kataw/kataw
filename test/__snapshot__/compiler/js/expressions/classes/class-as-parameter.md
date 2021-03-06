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
    "kind": 196,
    "source": "var C;\n\nfunction decorator(el) {\n  return Object.assign(el, {\n    finisher(Class) {\n      C = Class;\n    },\n  });\n}\n\nclass A {\n  @decorator\n  foo() {}\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "C",
                                "rawText": "C",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 5
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "decorator",
                    "rawText": "decorator",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 16,
                    "end": 26
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "el",
                                "rawText": "el",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 27,
                                "end": 29
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 27,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 30
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 66232,
                                        "member": {
                                            "kind": 196712,
                                            "text": "Object",
                                            "rawText": "Object",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 41,
                                            "end": 48
                                        },
                                        "expression": {
                                            "kind": 196711,
                                            "text": "assign",
                                            "rawText": "assign",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 49,
                                            "end": 55
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 55,
                                        "period": {
                                            "kind": 254,
                                            "pos": 48,
                                            "end": 49
                                        }
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 196712,
                                                "text": "el",
                                                "rawText": "el",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 56,
                                                "end": 58
                                            },
                                            {
                                                "kind": 67224232,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [
                                                        {
                                                            "kind": 16844946,
                                                            "name": {
                                                                "kind": 196711,
                                                                "text": "finisher",
                                                                "rawText": "finisher",
                                                                "flags": 16384,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 61,
                                                                "end": 74
                                                            },
                                                            "formalParameters": {
                                                                "kind": 90,
                                                                "formalParameterList": [
                                                                    {
                                                                        "kind": 89,
                                                                        "ellipsis": false,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "Class",
                                                                            "rawText": "Class",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 1025,
                                                                            "start": 75,
                                                                            "end": 80
                                                                        },
                                                                        "isOptional": false,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "decorators": null,
                                                                        "accessModifier": null,
                                                                        "isReadOnly": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 1,
                                                                        "start": 75,
                                                                        "end": 80
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 75,
                                                                "end": 81
                                                            },
                                                            "isSetter": false,
                                                            "isGetter": false,
                                                            "contents": {
                                                                "kind": 91,
                                                                "functionStatementList": {
                                                                    "kind": 94,
                                                                    "statements": [
                                                                        {
                                                                            "kind": 2097233,
                                                                            "expression": {
                                                                                "kind": 65550,
                                                                                "left": {
                                                                                    "kind": 196712,
                                                                                    "text": "C",
                                                                                    "rawText": "C",
                                                                                    "flags": 16384,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 83,
                                                                                    "end": 91
                                                                                },
                                                                                "operator": "=",
                                                                                "right": {
                                                                                    "kind": 196712,
                                                                                    "text": "Class",
                                                                                    "rawText": "Class",
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "start": 93,
                                                                                    "end": 99
                                                                                },
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 83,
                                                                                "end": 99
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 83,
                                                                            "end": 100
                                                                        }
                                                                    ],
                                                                    "multiline": true,
                                                                    "flags": 16384,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 83,
                                                                    "end": 100
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 81,
                                                                "end": 106
                                                            },
                                                            "decorators": null,
                                                            "type": null,
                                                            "accessModifier": null,
                                                            "typeParameters": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 74,
                                                            "end": 106
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": true,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 61,
                                                    "end": 107
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 59,
                                                "end": 111
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 58,
                                        "end": 112
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 112
                                },
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 113
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 113
                    },
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 115
                },
                "typeParameters": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 256,
                "start": 6,
                "end": 115
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 122,
                    "end": 124
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 145
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 146,
                                    "end": 147
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 149,
                                        "end": 149
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 147,
                                    "end": 150
                                },
                                "decorators": {
                                    "kind": 64,
                                    "decoratorList": [
                                        {
                                            "kind": 63,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "decorator",
                                                "rawText": "decorator",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 130,
                                                "end": 139
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 130,
                                            "end": 139
                                        }
                                    ],
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 130,
                                    "end": 139
                                },
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 145,
                                "end": 150
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 126,
                            "end": 150
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 126,
                    "end": 152
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 115,
                "end": 152
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 152
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
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

