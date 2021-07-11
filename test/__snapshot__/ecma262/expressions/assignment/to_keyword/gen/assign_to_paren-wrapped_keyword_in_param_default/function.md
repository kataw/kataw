# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
async (x = (function) = f) => {}
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
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 177,
                                        "asyncKeyword": null,
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 12,
                                            "end": 20
                                        },
                                        "asteriskToken": null,
                                        "name": null,
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "flags": 32,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "returnType": null,
                                        "flags": 32,
                                        "start": 12,
                                        "end": 21
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 7,
                    "end": 26
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 26,
                    "end": 29
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 32
                },
                "flags": 290,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "async (x = (function) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 20, end: 21
✖ Missing an opening brace - '{ - start: 22, end: 23
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 21, end: 23
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 10, end: 29

```

