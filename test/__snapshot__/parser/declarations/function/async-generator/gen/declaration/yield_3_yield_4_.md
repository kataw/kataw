# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/async-generator/gen/declaration
> :: test: declaration
> :: case: yield 3; yield 4;
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {yield 3; yield 4;}

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
            "generatorToken": {
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
                "end": 22
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 29
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 3,
                                    "rawText": "3",
                                    "flags": 96,
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
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 32,
                                    "end": 38
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 40
                            },
                            "flags": 16,
                            "start": 32,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 41
                },
                "flags": 32,
                "start": 22,
                "end": 42
            },
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield 3; yield 4;}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

async function * gen() {
  yield 3;
  yield 4;
}
```

### Diagnostics

```javascript
✔ No errors
```

