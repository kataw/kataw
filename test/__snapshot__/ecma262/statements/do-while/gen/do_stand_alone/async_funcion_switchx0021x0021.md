# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_stand_alone
> :: test: do stand alone
> :: case: async funcion switch!!
## Options

`````js
{}
`````
## Input

`````js
do async funcion switch!!
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
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 2,
                        "end": 8
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "funcion",
                        "rawText": "funcion",
                        "flags": 96,
                        "start": 8,
                        "end": 16
                    },
                    "returnType": null,
                    "arrowToken": null,
                    "contents": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 288,
                    "start": 2,
                    "end": 16
                },
                "flags": 16,
                "start": 2,
                "end": 16
            },
            "whileKeyword": null,
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "start": 16,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 16
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "start": 16,
                "end": 23
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "start": 23,
                    "end": 24
                },
                "operand": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 96,
                        "start": 24,
                        "end": 25
                    },
                    "operand": {
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
                "start": 23,
                "end": 25
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [],
                "flags": 16,
                "start": 25,
                "end": 25
            },
            "flags": 80,
            "start": 16,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "do async funcion switch!!",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8
✖ 'async' modifier cannot be used here - start: 16, end: 23
✖ Identifier expected - start: 16, end: 23
✖ Missing an opening parentheses - '( - start: 23, end: 24
✖ Identifier expected - start: 25, end: 25

```

