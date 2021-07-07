# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: function
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((function) = f)) {}
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
                "transformFlags": 32,
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
                                "transformFlags": 0,
                                "start": 15,
                                "end": 22
                            },
                            "operand": {
                                "kind": 121,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 177,
                                            "asyncKeyword": null,
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 33
                                            },
                                            "asteriskToken": null,
                                            "name": null,
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 33,
                                                "end": 33
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 34,
                                                    "end": 34
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 34
                                            },
                                            "returnType": null,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 34
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 25,
                                        "end": 38
                                    },
                                    "flags": 24,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 39
                                },
                                "flags": 22,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 40
                            },
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 15,
                            "end": 40
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 40
                    },
                    {
                        "kind": 212,
                        "propertyList": {
                            "kind": 213,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 42
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 40,
                        "end": 43
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 43
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 43,
                "end": 43
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((function) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 33, end: 34
✖ Missing an opening brace - '{ - start: 35, end: 36
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 34, end: 36
✖ ',' expected - start: 41, end: 42
✖ ',' expected - start: 42, end: 43

```

