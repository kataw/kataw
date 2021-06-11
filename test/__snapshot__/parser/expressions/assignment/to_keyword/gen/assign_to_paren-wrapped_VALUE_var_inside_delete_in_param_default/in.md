# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE var inside delete in param default
> :: case: in
## Options

`````js
{}
`````
## Input

`````js
(x = delete ((in) = f)) => {}
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
                    "start": 23,
                    "end": 26
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
                                            "kind": 198,
                                            "left": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "operatorToken": {
                                                "kind": 21006388,
                                                "flags": 64,
                                                "start": 14,
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
                                            "start": 14,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 13,
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
                                    "start": 13,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 22
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 22
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
                        "start": 28,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 29
                },
                "flags": 34,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "(x = delete ((in) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 14, end: 16
✖ Identifier expected - start: 16, end: 17

```

