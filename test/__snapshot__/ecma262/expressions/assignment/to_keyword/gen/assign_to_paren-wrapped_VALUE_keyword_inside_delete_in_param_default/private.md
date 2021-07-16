# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: private
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((private) = f)) {}
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
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
                            "transformFlags": 0,
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
                                "transformFlags": 8192,
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
                                            "text": "private",
                                            "rawText": "private",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 32
                                        },
                                        "flags": 24,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 33
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 35
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 24,
                                    "end": 37
                                },
                                "flags": 22,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 38
                            },
                            "flags": 32,
                            "transformFlags": 16384,
                            "start": 15,
                            "end": 38
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 38
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 38
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 39,
                "end": 42
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((private) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
function *f(x = delete ((private) = f)) {}
```

### Diagnostics

```javascript
✔ No errors
```

