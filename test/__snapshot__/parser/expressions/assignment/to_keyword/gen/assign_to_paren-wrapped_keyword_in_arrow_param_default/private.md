# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: private
## Options

`````js
{}
`````
## Input

`````js
(x = (private) = f) => {}
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
                    "start": 19,
                    "end": 22
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
                                    "kind": 134299649,
                                    "text": "private",
                                    "rawText": "private",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 14
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 14,
                                "end": 16
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 18
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
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 25
                },
                "flags": 34,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(x = (private) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

(x = (private) = f) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

