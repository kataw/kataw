# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
(x = (instanceof) = f) => {}
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 22,
                    "end": 25
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
                            "start": 1,
                            "end": 2
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
                                        "start": 6,
                                        "end": 6
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 64,
                                        "start": 6,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 17
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
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
                            "flags": 32,
                            "start": 4,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 21
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
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
                "flags": 34,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(x = (instanceof) = f) => {}",
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
✖ Identifier expected - start: 6, end: 16
✖ Identifier expected - start: 16, end: 17

```

