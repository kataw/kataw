# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: arguments
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((arguments) = f)) => {}
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
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
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 4259886,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 17
                                },
                                "operand": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 29
                                            },
                                            "flags": 19,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 30
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 19,
                                        "end": 34
                                    },
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 10,
                                "end": 35
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 36
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 39
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 41
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 42
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((arguments) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
async (x = delete ((arguments) = f)) => {};
```

### Diagnostics

```javascript
✔ No errors
```

