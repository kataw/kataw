# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_arrow_param_default
> :: test: assign to paren-wrapped keyword in arrow param default
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
(x = (false) = f) => {}
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
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 6,
                                        "end": 11
                                    },
                                    "flags": 4,
                                    "start": 32,
                                    "end": 12
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                },
                                "flags": 0,
                                "start": 4,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 1,
                    "end": 17
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 17,
                    "end": 20
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 23
                },
                "flags": 34,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(x = (false) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

(x = (false ) = f) => {};
```

### Diagnostics

```javascript
✔ No errors
```

