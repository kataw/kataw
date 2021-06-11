# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: protected
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((protected) = f)) => {}
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
                    "start": 30,
                    "end": 33
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
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 64,
                                "start": 4,
                                "end": 11
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "protected",
                                            "rawText": "protected",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 32,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 29
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
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 36
                },
                "flags": 34,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "(x = delete ((protected) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

(x = delete ((protected) = f)) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

