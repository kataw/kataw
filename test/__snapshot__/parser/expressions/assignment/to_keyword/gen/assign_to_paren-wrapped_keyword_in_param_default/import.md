# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: import
## Options

`````js
{}
`````
## Input

`````js
async (x = (import) = f) => {}
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
                "start": 24,
                "end": 27
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
                        "kind": 121,
                        "expression": {
                            "kind": 120,
                            "expression": {
                                "kind": 206,
                                "importKeyword": {
                                    "kind": 37814364,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 18
                                },
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 16,
                            "start": 18,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 24
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
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "start": 27,
                "end": 30
            },
            "flags": 290,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "async (x = (import) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 19, end: 21
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 19, end: 21
✖ Expected a `;` - start: 24, end: 27
✖ Arrow parameters can only contain a binding pattern or an identifier - start: 10, end: 27

```

