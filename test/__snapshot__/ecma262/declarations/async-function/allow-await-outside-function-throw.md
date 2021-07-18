# Kataw parser test case

## Input

`````js
function a() {
  return await 1
}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 23
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "flags": 81,
                            "transformFlags": 256,
                            "start": 14,
                            "end": 29
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 29,
                            "end": 31
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function a() {\n  return await 1\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 29, end: 31

```

