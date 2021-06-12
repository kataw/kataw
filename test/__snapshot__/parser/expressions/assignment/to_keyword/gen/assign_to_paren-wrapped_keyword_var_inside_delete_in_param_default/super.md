# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\assignment\to_keyword\gen\assign_to_paren-wrapped_keyword_var_inside_delete_in_param_default
> :: test: assign to paren-wrapped keyword var inside delete in param default
> :: case: super
## Input

`````js
(x = delete ((super) = f)) => {}
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
                    "start": 26,
                    "end": 29
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
                                            "kind": 129,
                                            "member": {
                                                "kind": 225,
                                                "superKeyword": {
                                                    "kind": 4259935,
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 19
                                                },
                                                "flags": 96,
                                                "start": 14,
                                                "end": 19
                                            },
                                            "expression": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 19,
                                                "end": 19
                                            },
                                            "flags": 536870944,
                                            "start": 14,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "start": 13,
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
                                    "start": 13,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 25
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 25
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
                        "start": 31,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 32
                },
                "flags": 34,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "(x = delete ((super) = f)) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 14, end: 20
✖ Dot property must be an identifier - start: 19, end: 20

```

