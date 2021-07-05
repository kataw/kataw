# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: delete
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((delete) = f)) {}
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
            "asteriskToken": {
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
                                            "kind": 126,
                                            "operandToken": {
                                                "kind": 4259886,
                                                "flags": 96,
                                                "start": 25,
                                                "end": 31
                                            },
                                            "operand": {
                                                "kind": 16637,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 64,
                                                "start": 31,
                                                "end": 31
                                            },
                                            "flags": 32,
                                            "start": 25,
                                            "end": 31
                                        },
                                        "flags": 24,
                                        "start": 32,
                                        "end": 32
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 36
                                    },
                                    "flags": 0,
                                    "start": 24,
                                    "end": 36
                                },
                                "flags": 22,
                                "start": 32,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 37
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 37
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 37
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 40,
                    "end": 40
                },
                "flags": 32,
                "start": 38,
                "end": 41
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((delete) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 31, end: 32

```

