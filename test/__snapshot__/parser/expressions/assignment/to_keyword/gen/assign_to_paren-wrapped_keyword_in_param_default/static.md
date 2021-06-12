# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: static
## Input

`````js
async (x = (static) = f) => {}
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
                        "kind": 125,
                        "left": {
                            "kind": 121,
                            "expression": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 12,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 19
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
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
                        "start": 10,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 23
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
    "source": "async (x = (static) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

async (x = (static) = f) =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

