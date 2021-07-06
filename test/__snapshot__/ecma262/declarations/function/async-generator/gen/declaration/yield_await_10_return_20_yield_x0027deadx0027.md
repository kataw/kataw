# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: declaration
> :: case: yield await 10; return 20; yield 'dead'
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {yield await 10; return 20; yield 'dead'}

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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 35
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 10,
                                        "rawText": "10",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 39
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 46
                            },
                            "expression": {
                                "kind": 201392130,
                                "text": 20,
                                "rawText": "20",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 49
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 39,
                            "end": 50
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 56
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "'dead'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 63
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 50,
                                "end": 63
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 63
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 63
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 64
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield await 10; return 20; yield 'dead'}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

async function * gen() {
  yield await 10;
  return 20;
  yield '\'dead\'';
}
```

### Diagnostics

```javascript
✔ No errors
```

