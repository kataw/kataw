# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/to_keyword/gen/assign_to_paren-wrapped_keyword_in_generator_param_default
> :: test: assign to paren-wrapped keyword in generator param default
> :: case: instanceof
## Options

`````js
{}
`````
## Input

`````js
function *f(x = (instanceof) = f) {}
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
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "operatorToken": {
                                        "kind": 4229173,
                                        "flags": 96,
                                        "start": 17,
                                        "end": 27
                                    },
                                    "right": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 96,
                                    "start": 17,
                                    "end": 27
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 28
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 28,
                                "end": 30
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 32
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 32
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 12,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 33,
                "end": 36
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(x = (instanceof) = f) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 27
✖ Identifier expected - start: 27, end: 28

```

