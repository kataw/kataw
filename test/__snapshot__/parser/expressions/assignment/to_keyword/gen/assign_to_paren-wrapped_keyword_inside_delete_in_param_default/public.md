# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: public
## Input

`````js
async (x = delete ((public) = f)) => {}
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
                                        "kind": 134299649,
                                        "text": "public",
                                        "rawText": "public",
                                        "flags": 96,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
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
                                "start": 19,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 32
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 32
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
    "source": "async (x = delete ((public) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

async (x = delete ((public) = f)) =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

