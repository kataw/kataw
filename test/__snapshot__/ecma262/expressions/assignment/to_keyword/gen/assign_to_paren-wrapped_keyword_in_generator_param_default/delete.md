# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: delete
## Options

`````js
{}
`````
## Input

`````js
function *f(x = (delete) = f) {}
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
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 4259886,
                                        "flags": 96,
                                        "transformFlags": 8192,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 17,
                                    "end": 23
                                },
                                "flags": 15,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 24
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 28
                            },
                            "flags": 0,
                            "transformFlags": 128,
                            "start": 15,
                            "end": 28
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 28
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 29,
                "end": 32
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(x = (delete) = f) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 23, end: 24

```

