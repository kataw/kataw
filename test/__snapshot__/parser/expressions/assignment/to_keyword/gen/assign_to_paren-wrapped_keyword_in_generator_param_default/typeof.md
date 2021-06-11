# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: typeof
## Options

`````js
{}
`````
## Input

`````js
function *f(x = (typeof) = f) {}
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
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
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 64,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 23,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 23
                                },
                                "flags": 32,
                                "start": 15,
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
                            "start": 15,
                            "end": 28
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 29
            },
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
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "function *f(x = (typeof) = f) {}",
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
✖ Identifier expected - start: 23, end: 24

```

