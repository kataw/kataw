# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: eval
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((eval) = f)) => {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
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
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "flags": 19,
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
                                    "start": 19,
                                    "end": 29
                                },
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 30
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 30
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 30
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 7,
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
            "flags": 290,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((eval) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

async (x = delete ((eval) = f)) => {}
```

### Diagnostics

```javascript
✔ No errors
```

