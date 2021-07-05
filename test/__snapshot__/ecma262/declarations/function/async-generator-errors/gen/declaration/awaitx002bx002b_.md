# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: await++;
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {await++;}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 21,
                "end": 21
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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 128,
                                    "operandToken": {
                                        "kind": 196635,
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "operand": {
                                        "kind": 16637,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 64,
                                        "start": 31,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 32
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 32
                },
                "flags": 32,
                "start": 22,
                "end": 33
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "async function * gen() {await++;}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 31, end: 32
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 31, end: 32

```

