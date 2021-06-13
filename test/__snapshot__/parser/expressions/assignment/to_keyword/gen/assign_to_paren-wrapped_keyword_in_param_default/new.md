# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: new
## Options

`````js
{}
`````
## Input

`````js
async (x = (new) = f) => {}
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
                "start": 21,
                "end": 24
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
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "start": 12,
                                    "end": 15
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 15,
                                    "end": 15
                                },
                                "argumentList": null,
                                "flags": 96,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 16
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "start": 16,
                            "end": 18
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 20
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
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 27
            },
            "flags": 290,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "async (x = (new) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```

