# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/do_parens
> :: test: do parens
> :: case: function while
## Options

`````js
{}
`````
## Input

`````js
do( function while while
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 3,
                            "end": 12
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 12
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 12,
                            "end": 12
                        },
                        "returnType": null,
                        "flags": 32,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 2,
                    "start": 32,
                    "end": 12
                },
                "flags": 16,
                "start": 2,
                "end": 12
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 12,
                "end": 18
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 18,
                "end": 18
            },
            "flags": 80,
            "start": 0,
            "end": 18
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "start": 18,
                "end": 24
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 24,
                "end": 24
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "start": 24,
                    "end": 24
                },
                "flags": 16,
                "start": 24,
                "end": 24
            },
            "flags": 80,
            "start": 18,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "do( function while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 13, end: 18
✖ Missing an opening parentheses - '( - start: 19, end: 24

```

