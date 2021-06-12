# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/async-generator/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\async-generator\gen\declaration
> :: test: declaration
> :: case: yield /* comment */ { yield: 12 }
## Input

`````js
async function * gen() {yield /* comment */ { yield: 12 }}

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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "generatorToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 51
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 12,
                                                    "rawText": "12",
                                                    "flags": 96,
                                                    "start": 52,
                                                    "end": 55
                                                },
                                                "flags": 32,
                                                "start": 45,
                                                "end": 55
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 45,
                                        "end": 55
                                    },
                                    "flags": 48,
                                    "start": 29,
                                    "end": 57
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 24,
                    "end": 57
                },
                "flags": 32,
                "start": 22,
                "end": 58
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 400,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield /* comment */ { yield: 12 }}\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

async function * gen() {
  yield /* comment */ { yield: 12 };
}
```

### Diagnostics

```javascript
✔ No errors
```

