# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class C {
  #brand;

  #method() {}

  get #getter() {}

  static isC(obj) {
    return #brand in obj && #method in obj && #getter in obj;
  }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "class C {\n  #brand;\n\n  #method() {}\n\n  get #getter() {}\n\n  static isC(obj) {\n    return #brand in obj && #method in obj && #getter in obj;\n  }\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 5,
                    "end": 7
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 131252,
                                "text": "#brand",
                                "rawText": "#brand",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 524288,
                                "start": 9,
                                "end": 18
                            },
                            "isInKeyword": false,
                            "expression": null,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 9,
                            "end": 19
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 131252,
                                    "text": "#method",
                                    "rawText": "#method",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 524288,
                                    "start": 19,
                                    "end": 30
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 34
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 35
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 35
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 19,
                            "end": 35
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 131252,
                                    "text": "#getter",
                                    "rawText": "#getter",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 524288,
                                    "start": 42,
                                    "end": 50
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 52
                                },
                                "isSetter": false,
                                "isGetter": true,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 54,
                                        "end": 54
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 55
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 55
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 35,
                            "end": 55
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
                                    "text": "isC",
                                    "rawText": "isC",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 65,
                                    "end": 69
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "obj",
                                                "rawText": "obj",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 70,
                                                "end": 73
                                            },
                                            "isOptional": false,
                                            "type": null,
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 70,
                                            "end": 73
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 74
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": {
                                                    "kind": 65563,
                                                    "left": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "#brand",
                                                                "rawText": "#brand",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 87,
                                                                "end": 94
                                                            },
                                                            "operator": "in",
                                                            "right": {
                                                                "kind": 196712,
                                                                "text": "obj",
                                                                "rawText": "obj",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 97,
                                                                "end": 101
                                                            },
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 87,
                                                            "end": 101
                                                        },
                                                        "operator": "&&",
                                                        "right": {
                                                            "kind": 65563,
                                                            "left": {
                                                                "kind": 196712,
                                                                "text": "#method",
                                                                "rawText": "#method",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 104,
                                                                "end": 112
                                                            },
                                                            "operator": "in",
                                                            "right": {
                                                                "kind": 196712,
                                                                "text": "obj",
                                                                "rawText": "obj",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 115,
                                                                "end": 119
                                                            },
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 112,
                                                            "end": 119
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 87,
                                                        "end": 119
                                                    },
                                                    "operator": "&&",
                                                    "right": {
                                                        "kind": 65563,
                                                        "left": {
                                                            "kind": 196712,
                                                            "text": "#getter",
                                                            "rawText": "#getter",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 122,
                                                            "end": 130
                                                        },
                                                        "operator": "in",
                                                        "right": {
                                                            "kind": 196712,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 133,
                                                            "end": 137
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 130,
                                                        "end": 137
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 87,
                                                    "end": 137
                                                },
                                                "flags": 81920,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 76,
                                                "end": 138
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 76,
                                        "end": 138
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 142
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 142
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 55,
                            "end": 142
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 9,
                    "end": 144
                },
                "decorators": null,
                "isAbstract": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 144
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 144
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 144
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

