# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: declaration
> :: case: yield await 10; return
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {yield await 10; return}

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
                                    "transformFlags": 4096,
                                    "start": 29,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 24,
                                "end": 38
                            },
                            "flags": 16,
                            "transformFlags": 4096,
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
                            "expression": null,
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 39,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 47
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function * gen() {yield await 10; return}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
async function *gen() {
  yield await 10;
  return;
}
```

### Diagnostics

```javascript
✔ No errors
```

