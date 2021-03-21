# Kataw parser test case

## Input

`````js
class Foo {



    defaults = {

        done: false

    }



    bar() {

        return 3;

    }



}


`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class Foo {\n\n\n\n    defaults = {\n\n        done: false\n\n    }\n\n\n\n    bar() {\n\n        return 3;\n\n    }\n\n\n\n}\n\n",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 9
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
                            "text": "defaults",
                            "rawText": "defaults",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 27
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "done",
                                            "rawText": "done",
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 45
                                        },
                                        "right": {
                                            "kind": 4260391,
                                            "text": false,
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 46,
                                            "end": 52
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 32768,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 52
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 52
                            },
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 59
                        },
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 11,
                        "end": 59
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
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 59,
                                "end": 70
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 71,
                                "end": 72
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
                                                "kind": 4261540,
                                                "text": 3,
                                                "rawText": "3",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 90,
                                                "end": 92
                                            },
                                            "flags": 32768,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 93
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 93
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 100
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 70,
                            "end": 100
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 59,
                        "end": 100
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 11,
                "end": 105
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 105
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
    "end": 107
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

