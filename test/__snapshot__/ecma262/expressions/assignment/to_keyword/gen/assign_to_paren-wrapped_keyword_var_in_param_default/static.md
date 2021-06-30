# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_var_in_param_default
> :: test: assign to paren-wrapped keyword var in param default
> :: case: static
## Options

`````js
{}
`````
## Input

`````js
(x = (static) = f) => {}
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
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
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
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 6,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 4,
                                    "end": 13
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2,
                    "start": 1,
                    "end": 18
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 18,
                    "end": 21
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 24
                },
                "flags": 34,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "(x = (static) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

(x = (static) = f) =>  { };

```

### Diagnostics

```javascript
✔ No errors
```

