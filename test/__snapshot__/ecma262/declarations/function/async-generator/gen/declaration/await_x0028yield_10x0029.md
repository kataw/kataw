# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: declaration
> :: case: await (yield 10)
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {await (yield 10)}

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
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 29
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 36
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 39
                                    },
                                    "flags": 29,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 40
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 40
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 41
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "async function * gen() {await (yield 10)}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

async function * gen() {
  await (yield 10);
}
```

### Diagnostics

```javascript
✔ No errors
```

