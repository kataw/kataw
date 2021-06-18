# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: implements
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((implements) = f)) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 4259886,
                                "flags": 96,
                                "start": 15,
                                "end": 22
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "implements",
                                            "rawText": "implements",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "start": 24,
                                        "end": 36
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 36,
                                        "end": 38
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 41
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 41
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 42
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 44,
                    "end": 44
                },
                "flags": 32,
                "start": 42,
                "end": 45
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((implements) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

function * f() {}
```

### Diagnostics

```javascript
✔ No errors
```

