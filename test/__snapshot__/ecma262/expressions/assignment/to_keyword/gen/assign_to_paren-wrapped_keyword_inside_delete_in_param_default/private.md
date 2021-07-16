# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: private
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((private) = f)) => {}
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
                                    "transformFlags": 8192,
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
                                                "text": "private",
                                                "rawText": "private",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 27
                                            },
                                            "flags": 19,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 28
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 19,
                                        "end": 32
                                    },
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 10,
                                "end": 33
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 34
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 37
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 40
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((private) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
async (x = delete ((private) = f)) => {};
```

### Diagnostics

```javascript
✔ No errors
```

