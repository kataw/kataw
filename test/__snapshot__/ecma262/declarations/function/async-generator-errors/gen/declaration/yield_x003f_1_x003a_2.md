# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: yield ? 1 : 2
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {yield ? 1 : 2}

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
                "start": 20,
                "end": 20
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
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 29
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 32,
                                    "start": 24,
                                    "end": 29
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 29,
                                    "end": 31
                                },
                                "consequent": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 33,
                                    "end": 35
                                },
                                "alternate": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 37
                },
                "flags": 32,
                "start": 22,
                "end": 38
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield ? 1 : 2}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of conditional expression in a generator context - start: 24, end: 31

```

