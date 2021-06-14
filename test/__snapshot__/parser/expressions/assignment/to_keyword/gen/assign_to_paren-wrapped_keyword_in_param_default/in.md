# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
async (x = (in) = f) => {}
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
                "start": 20,
                "end": 23
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
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 12,
                                "end": 14
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 15
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 19
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
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 23,
                "end": 26
            },
            "flags": 290,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "async (x = (in) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 12, end: 14
✖ Identifier expected - start: 14, end: 15

```

