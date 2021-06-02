# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-02
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: instanceof
## Input

`````js
async (x = (instanceof) = f) => {}
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
                "start": 28,
                "end": 31
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
                                "kind": 198,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 12,
                                    "end": 12
                                },
                                "operatorToken": {
                                    "kind": 4229173,
                                    "flags": 64,
                                    "start": 12,
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
                                "start": 12,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 23
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
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
                        "start": 10,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 27
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
                    "start": 33,
                    "end": 33
                },
                "flags": 32,
                "start": 31,
                "end": 34
            },
            "flags": 290,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "async (x = (instanceof) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 22
✖ Identifier expected - start: 22, end: 23

```

