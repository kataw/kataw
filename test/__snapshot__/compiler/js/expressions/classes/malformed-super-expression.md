# Kataw parser test case

## Input

`````js
class A {
  x () {
    super - 1;
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A {\n  x () {\n    super - 1;\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
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
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "x",
                                "rawText": "x",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 13
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
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
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 67175096,
                                                    "member": {
                                                        "kind": 4260561,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 28
                                                    },
                                                    "expression": {
                                                        "kind": 196711,
                                                        "text": "",
                                                        "rawText": "",
                                                        "flags": 1,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 28
                                                    },
                                                    "flags": 18,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 1,
                                                    "end": 28
                                                },
                                                "operator": "-",
                                                "right": {
                                                    "kind": 4261540,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 32
                                                },
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 32
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 33
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 33
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 37
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 37
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 37
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 39
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 29,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

