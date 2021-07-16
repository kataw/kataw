# Kataw parser test case

## Input

`````js
async function f(){ async(await x); }
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
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 25
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 26,
                                            "end": 33
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 19,
                                "end": 34
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 19,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 35
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 37
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async function f(){ async(await x); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
async function f() {
  async(await x);
}
```

### Diagnostics

```javascript
✔ No errors
```

