# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: package
## Input

`````js
async (x = (package) = f) => {}
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
                "start": 25,
                "end": 28
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
                                "text": "package",
                                "rawText": "package",
                                "flags": 96,
                                "start": 12,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 20
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 64,
                            "start": 20,
                            "end": 22
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 22,
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
                    "start": 30,
                    "end": 30
                },
                "flags": 32,
                "start": 28,
                "end": 31
            },
            "flags": 290,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async (x = (package) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

async (x = (package) = f) =>  {}
```

### Diagnostics

```javascript
✔ No errors
```

