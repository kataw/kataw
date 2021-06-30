# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword inside delete in param default
> :: case: package
## Options

`````js
{}
`````
## Input

`````js
async (x = delete ((package) = f)) => {}
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "start": 10,
                                "end": 17
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "package",
                                            "rawText": "package",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 28
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 17,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 33
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 33
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 34
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 34,
                "end": 37
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 39,
                    "end": 39
                },
                "flags": 32,
                "start": 37,
                "end": 40
            },
            "flags": 290,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "async (x = delete ((package) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

async (x = delete  ((package) = f)) =>  { }

```

### Diagnostics

```javascript
✔ No errors
```

