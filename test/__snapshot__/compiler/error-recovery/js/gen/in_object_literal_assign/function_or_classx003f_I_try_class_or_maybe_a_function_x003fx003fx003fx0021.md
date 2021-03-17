# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-17
- From: kataw/test/__snapshot__/compiler/error-recovery/js/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/js/gen/in_object_literal_assign
> :: test: in object literal assign
> :: case: function or class? I try class or maybe a function ???!
## Input

`````js
x = { x = function or class? I try class or maybe a function ???!}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "x = { x = function or class? I try class or maybe a function ???!}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operator": "=",
                "right": {
                    "kind": 65592,
                    "shortCircuit": {
                        "kind": 65563,
                        "left": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65597,
                                        "left": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 7
                                        },
                                        "isOptional": false,
                                        "exclamation": false,
                                        "right": {
                                            "kind": 8456285,
                                            "name": {
                                                "kind": 131102,
                                                "text": "or",
                                                "rawText": "or",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 1025,
                                                "start": 18,
                                                "end": 21
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [],
                                                    "multiline": false,
                                                    "flags": 1,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 21,
                                                    "end": 21
                                                },
                                                "flags": 1,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 21
                                        },
                                        "accessModifier": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 5,
                                        "end": 21
                                    },
                                    {
                                        "kind": 65597,
                                        "left": {
                                            "kind": 196712,
                                            "text": "class",
                                            "rawText": "class",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "isOptional": true,
                                        "exclamation": false,
                                        "right": {
                                            "kind": 131322,
                                            "text": "",
                                            "flags": 3,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 30
                                        },
                                        "accessModifier": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 1,
                                        "start": 21,
                                        "end": 30
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "try",
                                        "rawText": "try",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 34
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "class",
                                        "rawText": "class",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 40
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "or",
                                        "rawText": "or",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 43
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "maybe",
                                        "rawText": "maybe",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 49
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 51
                                    },
                                    {
                                        "kind": 196711,
                                        "text": "function",
                                        "rawText": "function",
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 60
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 60
                            },
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 60
                        },
                        "operator": "??",
                        "right": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 63,
                            "end": 63
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 34,
                        "start": 3,
                        "end": 63
                    },
                    "consequent": {
                        "kind": 65774,
                        "operator": "!",
                        "operand": {
                            "kind": 131322,
                            "text": "",
                            "flags": 3,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 65
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 65
                    },
                    "alternate": {
                        "kind": 131322,
                        "text": "",
                        "flags": 3,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 65,
                        "end": 65
                    },
                    "flags": 1,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 65
                },
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 65
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 22,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 31,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 35,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 44,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 50,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 52,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 61,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 63,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 65,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

