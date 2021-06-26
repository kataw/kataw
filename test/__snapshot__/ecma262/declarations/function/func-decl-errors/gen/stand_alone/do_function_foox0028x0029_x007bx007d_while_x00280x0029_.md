# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/func-decl-errors/gen/stand_alone
> :: test: stand alone
> :: case: do function foo() {} while (0);
## Options

`````js
{}
`````
## Input

`````js
do function foo() {} while (0);
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
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 2,
                    "end": 11
                },
                "asteriskToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 11,
                    "end": 15
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 17,
                    "end": 20
                },
                "returnType": null,
                "flags": 16,
                "start": 2,
                "end": 20
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 64,
                "start": 20,
                "end": 26
            },
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "do function foo() {} while (0);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 11

```

