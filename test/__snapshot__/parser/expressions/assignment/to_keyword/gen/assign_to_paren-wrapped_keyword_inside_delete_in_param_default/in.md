# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((in) = f)) => {}
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
                "start": 29,
                "end": 32
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
                                "kind": 125,
                                "left": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 20,
                                            "end": 20
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "flags": 32,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 23
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 23,
                                    "end": 25
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 28
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 28
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
                    "start": 34,
                    "end": 34
                },
                "flags": 32,
                "start": 32,
                "end": 35
            },
            "flags": 290,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((in) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 22
✖ Identifier expected - start: 22, end: 23

```

