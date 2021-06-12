# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: new
## Input

`````js
async (x = delete ((new) = f)) => {}
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
                "start": 30,
                "end": 33
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
                            "flags": 64,
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
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 23,
                                            "end": 23
                                        },
                                        "argumentList": null,
                                        "flags": 96,
                                        "start": 20,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 28
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 29
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
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 33,
                "end": 36
            },
            "flags": 290,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((new) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 23, end: 24

```

