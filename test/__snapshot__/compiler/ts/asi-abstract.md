# Kataw parser test case

## Input

`````js
abstract
class NonAbstractClass {
  abstract s();
}

class C2 {
    abstract
    nonAbstractFunction() {
    }
}

class C3 {
    abstract
}

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract\nclass NonAbstractClass {\n  abstract s();\n}\n\nclass C2 {\n    abstract\n    nonAbstractFunction() {\n    }\n}\n\nclass C3 {\n    abstract\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 196712,
                "text": "abstract",
                "rawText": "abstract",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "NonAbstractClass",
                "rawText": "NonAbstractClass",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 14,
                "end": 31
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
                        "isAbstract": true,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "s",
                                "rawText": "s",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 46
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 48
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": null,
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 49
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 33,
                        "end": 49
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 33,
                "end": 51
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 8,
            "end": 51
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C2",
                "rawText": "C2",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 58,
                "end": 61
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 76
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
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 63,
                        "end": 76
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
                                "kind": 196711,
                                "text": "nonAbstractFunction",
                                "rawText": "nonAbstractFunction",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 100
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 101,
                                "end": 102
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 104,
                                    "end": 104
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 102,
                                "end": 110
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 110
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 76,
                        "end": 110
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 63,
                "end": 112
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 51,
            "end": 112
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C3",
                "rawText": "C3",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 119,
                "end": 122
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "abstract",
                            "rawText": "abstract",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 124,
                            "end": 137
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
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 524352,
                        "start": 124,
                        "end": 137
                    }
                ],
                "flags": 32768,
                "intersects": false,
                "transformFlags": 1,
                "start": 124,
                "end": 139
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 1,
            "start": 112,
            "end": 139
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 140
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

