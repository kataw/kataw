# Kataw parser test case

## Input

`````js
async function wrap() {
  (a = await b) => a
};
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
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
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
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 38
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 30,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 23,
                                            "end": 38
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 35,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 39
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 42
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 42,
                                    "end": 44
                                },
                                "flags": 35,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 44
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 23,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 46
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function wrap() {\n  (a = await b) => a\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
async function wrap() {
  (a = await b) => a;
}
```

### Diagnostics

```javascript
✔ No errors
```

