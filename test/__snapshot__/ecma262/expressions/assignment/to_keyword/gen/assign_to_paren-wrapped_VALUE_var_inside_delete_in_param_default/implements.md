# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: implements
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((implements) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 8192,
                                    "start": 4,
                                    "end": 11
                                },
                                "operand": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "implements",
                                                "rawText": "implements",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 24
                                            },
                                            "flags": 13,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 25
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 13,
                                        "end": 29
                                    },
                                    "flags": 11,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 30
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 4,
                                "end": 30
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 0,
                            "end": 30
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 31
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 34
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "(x = delete ((implements) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
(x = delete ((implements) = f)) => {};
```

### Diagnostics

```javascript
✔ No errors
```

