# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_VALUE_keyword_inside_delete_in_param_default
> :: test: assign to paren-wrapped VALUE keyword inside delete in param default
> :: case: for
## Options

`````js
{}
`````
## Input

`````js
function *f(x = delete ((for) = f)) {}
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
                                    "kind": 121,
                                    "expression": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 25
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 25
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 25
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 25,
                    "end": 25
                },
                "flags": 32,
                "start": 25,
                "end": 25
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 25
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 25,
                "end": 28
            },
            "initializer": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 28,
                "end": 28
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 28,
                "end": 28
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 29,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 31,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 29,
                    "end": 33
                },
                "flags": 16,
                "start": 29,
                "end": 33
            },
            "flags": 80,
            "start": 25,
            "end": 33
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 37,
                "end": 37
            },
            "flags": 16,
            "start": 35,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(x = delete ((for) = f)) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 25, end: 28
✖ Missing an opening parentheses - '( - start: 28, end: 29
✖ Identifier expected - start: 29, end: 31
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 29, end: 31
✖ Expected a `;` - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 35

```

