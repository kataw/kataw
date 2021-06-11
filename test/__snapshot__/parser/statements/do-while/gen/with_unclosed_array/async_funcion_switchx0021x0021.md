# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/parser/statements/do-while/gen/with_unclosed_array
> :: test: with unclosed array
> :: case: async funcion switch!!
## Options

`````js
{}
`````
## Input

`````js
do[ async funcion switch!!
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
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 17,
                "end": 17
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 271,
                                "arrowToken": null,
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "funcion",
                                    "rawText": "funcion",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 17
                                },
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 17,
                                    "end": 17
                                },
                                "flags": 288,
                                "start": 3,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 17
                },
                "flags": 16,
                "start": 2,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 17
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 17,
                "end": 24
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 24,
                    "end": 25
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 25,
                        "end": 26
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "flags": 64,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 25,
                    "end": 26
                },
                "flags": 32,
                "start": 24,
                "end": 26
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "flags": 80,
            "start": 17,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "do[ async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 24
✖ Missing an opening parentheses - '( - start: 24, end: 25
✖ Identifier expected - start: 26, end: 26

```

