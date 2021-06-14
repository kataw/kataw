# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
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
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 33,
                "end": 36
            },
            "typeParameters": null,
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
                        "kind": 126,
                        "operandToken": {
                            "kind": 4259886,
                            "flags": 96,
                            "start": 10,
                            "end": 17
                        },
                        "operand": {
                            "kind": 121,
                            "expression": {
                                "kind": 121,
                                "expression": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 206,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 27,
                                                "end": 27
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "start": 29,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 26,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 33
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 38,
                    "end": 38
                },
                "flags": 32,
                "start": 36,
                "end": 39
            },
            "flags": 290,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((import) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
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
✖ Expected a `;` - start: 32, end: 33
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 19, end: 36
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 17, end: 36

```

