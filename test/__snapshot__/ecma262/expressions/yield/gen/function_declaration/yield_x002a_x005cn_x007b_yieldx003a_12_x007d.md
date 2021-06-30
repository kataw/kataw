# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/function_declaration
> :: test: function declaration
> :: case: yield * \n { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
function not_gen() { yield * \n { yield: 12 } }}
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 17
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
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 96,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 28
                },
                "flags": 32,
                "start": 18,
                "end": 28
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 30,
                "end": 31
            },
            "flags": 16,
            "start": 30,
            "end": 31
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
                            "start": 33,
                            "end": 39
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 39,
                            "end": 40
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "start": 40,
                                "end": 43
                            },
                            "flags": 16,
                            "start": 40,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 43
            },
            "flags": 16,
            "start": 31,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function not_gen() { yield * \\n { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 28, end: 29
✖ Identifier expected - start: 28, end: 30
✖ Expected a `;` - start: 31, end: 33
✖ Declaration or statement expected - start: 45, end: 47
✖ Declaration or statement expected - start: 47, end: 48

```

