# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((import) = f)) => {}
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
                                        "kind": 121,
                                        "expression": {
                                            "kind": 206,
                                            "importKeyword": {
                                                "kind": 37814364,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 20,
                                                "end": 26
                                            },
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 27
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 29
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 29,
                                                    "end": 31
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 27,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "flags": 19,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 1024,
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
                    "end": 33
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 36
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 39
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((import) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 27, end: 29
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 27, end: 29
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 19, end: 36
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 17, end: 36

```

