# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: if
## Options

`````js
{}
`````
## Input

`````js
function *f(x = (if) = f) {}
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
                "kind": 201360950,
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
                            "kind": 121,
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 12,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "consequent": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 20,
                    "end": 24
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 20,
                "end": 24
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "transformFlags": 0,
            "start": 17,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function *f(x = (if) = f) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 19
✖ Missing an opening parentheses - '( - start: 19, end: 20
✖ Identifier expected - start: 20, end: 22
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 20, end: 22
✖ ')' is not allowed here. Did you mean ';'? - start: 24, end: 25

```

