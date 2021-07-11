# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_param_default
> :: test: assign to paren-wrapped keyword in param default
> :: case: arguments
## Options

`````js
{}
`````
## Input

`````js
async (x = (arguments) = f) => {}
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
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
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
                                        "text": "arguments",
                                        "rawText": "arguments",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 22
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 10,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 7,
                    "end": 27
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 27,
                    "end": 30
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 32,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 30,
                    "end": 33
                },
                "flags": 290,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "async (x = (arguments) = f) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  async (x = (arguments) = f) => {};

```

### Diagnostics

```javascript
✔ No errors
```

