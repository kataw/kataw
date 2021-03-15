# Kataw parser test case

## Input

`````js
class A {
    public static "\""() {}
    public static x: number = 1;
    public static y: number = 1;
    private static _b: number = 2;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class A {\n    public static \"\\\"\"() {}\n    public static x: number = 1;\n    public static y: number = 1;\n    private static _b: number = 2;\n}",
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
                        "isStatic": true,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 4261583,
                                "text": "\"",
                                "rawText": "\"",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 32
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
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
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 37
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 9,
                                "end": 20
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 32,
                            "end": 37
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 9,
                        "end": 37
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 55,
                            "end": 57
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 58,
                            "end": 65
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 69
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 37,
                            "end": 48
                        },
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 37,
                        "end": 70
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 88,
                            "end": 90
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 91,
                            "end": 98
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 1,
                            "rawText": "1",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 102
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 70,
                            "end": 81
                        },
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 70,
                        "end": 103
                    },
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "_b",
                            "rawText": "_b",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 122,
                            "end": 125
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 126,
                            "end": 133
                        },
                        "initializer": {
                            "kind": 4261540,
                            "text": 2,
                            "rawText": "2",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 137
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194485,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 103,
                            "end": 115
                        },
                        "isStatic": true,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 103,
                        "end": 138
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 9,
                "end": 140
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 140
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

