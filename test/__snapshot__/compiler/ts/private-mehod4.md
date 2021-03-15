# Kataw parser test case

## Input

`````js
const C = class {
    #bar() {}
    foo() {
        this.#bar = console.log("should log this then throw");
    }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const C = class {\n    #bar() {}\n    foo() {\n        this.#bar = console.log(\"should log this then throw\");\n    }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "C",
                            "rawText": "C",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 5,
                            "end": 7
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 66099,
                            "name": null,
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
                                                "kind": 131252,
                                                "text": "#bar",
                                                "rawText": "#bar",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 524288,
                                                "start": 17,
                                                "end": 26
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 28
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
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 30
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 31
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 17,
                                        "end": 31
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
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 41
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
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 4260571,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 43,
                                                                        "end": 56
                                                                    },
                                                                    "expression": {
                                                                        "kind": 131252,
                                                                        "text": "#bar",
                                                                        "rawText": "#bar",
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 524288,
                                                                        "start": 57,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 56,
                                                                    "end": 61,
                                                                    "period": {
                                                                        "kind": 255,
                                                                        "pos": 56,
                                                                        "end": 57
                                                                    }
                                                                },
                                                                "operator": "=",
                                                                "right": {
                                                                    "kind": 1073807915,
                                                                    "expression": {
                                                                        "kind": 67175096,
                                                                        "member": {
                                                                            "kind": 196712,
                                                                            "text": "console",
                                                                            "rawText": "console",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 63,
                                                                            "end": 71
                                                                        },
                                                                        "expression": {
                                                                            "kind": 196711,
                                                                            "text": "log",
                                                                            "rawText": "log",
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 72,
                                                                            "end": 75
                                                                        },
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "transformFlags": 0,
                                                                        "start": 71,
                                                                        "end": 75,
                                                                        "period": {
                                                                            "kind": 255,
                                                                            "pos": 71,
                                                                            "end": 72
                                                                        }
                                                                    },
                                                                    "typeArguments": null,
                                                                    "argumentList": {
                                                                        "kind": 3,
                                                                        "elements": [
                                                                            {
                                                                                "kind": 4261583,
                                                                                "text": "should log this then throw",
                                                                                "rawText": "should log this then throw",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 76,
                                                                                "end": 104
                                                                            }
                                                                        ],
                                                                        "trailingComma": false,
                                                                        "transformFlags": 0,
                                                                        "flags": 0,
                                                                        "symbol": null,
                                                                        "start": 104,
                                                                        "end": 105
                                                                    },
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 75,
                                                                    "end": 105
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 105
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 43,
                                                            "end": 106
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 32768,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 106
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 112
                                            },
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 112
                                        },
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 31,
                                        "end": 112
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 1,
                                "start": 17,
                                "end": 114
                            },
                            "decorators": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 114
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 114
                    }
                ],
                "flags": 8,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 114
            },
            "flags": 8,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 114
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

