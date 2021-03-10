# Kataw parser test case

## Input

`````js
class Base {
  static method() {}
  static prop = 1;
  static get accessor() { return 1 }
}

class Derived extends Base {
  static fn() {
      super.method; // allowed, as expected
      super.accessor; // not allowed, not expected
      super.prop; // not allowed, not expected
  }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Base {\n  static method() {}\n  static prop = 1;\n  static get accessor() { return 1 }\n}\n\nclass Derived extends Base {\n  static fn() {\n      super.method; // allowed, as expected\n      super.accessor; // not allowed, not expected\n      super.prop; // not allowed, not expected\n  }\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Base",
                    "rawText": "Base",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 10
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 28
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 30
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
                                        "start": 32,
                                        "end": 32
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 33
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 33
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 12,
                            "end": 33
                        },
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "prop",
                                "rawText": "prop",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 47
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 51
                            },
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 33,
                            "end": 52
                        },
                        {
                            "kind": 49,
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "accessor",
                                    "rawText": "accessor",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 74
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 76
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 85,
                                                    "end": 87
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 78,
                                                "end": 87
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 78,
                                        "end": 87
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 76,
                                    "end": 89
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 74,
                                "end": 89
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 52,
                            "end": 89
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 12,
                    "end": 91
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 91
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Derived",
                    "rawText": "Derived",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 98,
                    "end": 106
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 196712,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 114,
                        "end": 119
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 119
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": true,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "fn",
                                    "rawText": "fn",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 130,
                                    "end": 133
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 134,
                                    "end": 135
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
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 137,
                                                        "end": 149
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "method",
                                                        "rawText": "method",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 150,
                                                        "end": 156
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 149,
                                                    "end": 156,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 149,
                                                        "end": 150
                                                    }
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 137,
                                                "end": 157
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 157,
                                                        "end": 193
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "accessor",
                                                        "rawText": "accessor",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 194,
                                                        "end": 202
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 193,
                                                    "end": 202,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 193,
                                                        "end": 194
                                                    }
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 157,
                                                "end": 203
                                            },
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66232,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 203,
                                                        "end": 244
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "prop",
                                                        "rawText": "prop",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 245,
                                                        "end": 249
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 244,
                                                    "end": 249,
                                                    "period": {
                                                        "kind": 254,
                                                        "pos": 244,
                                                        "end": 245
                                                    }
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 203,
                                                "end": 250
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 137,
                                        "end": 250
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 135,
                                    "end": 283
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 133,
                                "end": 283
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 121,
                            "end": 283
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 121,
                    "end": 285
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 91,
                "end": 285
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 285
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 285
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

