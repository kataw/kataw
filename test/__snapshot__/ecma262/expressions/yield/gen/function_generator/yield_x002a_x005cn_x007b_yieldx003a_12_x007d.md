# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_generator
> :: test: function generator
> :: case: yield * \n { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
function * gen() { function not_gen() { yield * \n { yield: 12 } }}
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 18,
                                "end": 27
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "rawText": "",
                                                    "flags": 64,
                                                    "start": 47,
                                                    "end": 47
                                                },
                                                "flags": 32,
                                                "start": 39,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 47
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 47
                        }
                    ],
                    "flags": 32,
                    "start": 18,
                    "end": 47
                },
                "flags": 32,
                "start": 16,
                "end": 47
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 49,
                "end": 50
            },
            "flags": 16,
            "start": 49,
            "end": 50
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 52,
                            "end": 58
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 58,
                            "end": 59
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "start": 59,
                                "end": 62
                            },
                            "flags": 16,
                            "start": 59,
                            "end": 62
                        },
                        "flags": 16,
                        "start": 52,
                        "end": 62
                    }
                ],
                "flags": 16,
                "start": 52,
                "end": 62
            },
            "flags": 16,
            "start": 50,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "function * gen() { function not_gen() { yield * \\n { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 47, end: 48
✖ Identifier expected - start: 47, end: 49
✖ Expected a `;` - start: 50, end: 52
✖ Declaration or statement expected - start: 64, end: 66
✖ Declaration or statement expected - start: 66, end: 67

```

