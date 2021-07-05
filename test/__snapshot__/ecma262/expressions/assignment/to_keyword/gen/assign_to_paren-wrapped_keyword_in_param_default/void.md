# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: void
## Options

`````js
{}
`````
## Input

`````js
async (x = (void) = f) => {}
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
                            "start": 7,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477615,
                                        "flags": 96,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 16
                                },
                                "flags": 10,
                                "start": 32,
                                "end": 17
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 19,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 22
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 22,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 27,
                    "end": 27
                },
                "flags": 32,
                "start": 25,
                "end": 28
            },
            "flags": 290,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "async (x = (void) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 16, end: 17

```

