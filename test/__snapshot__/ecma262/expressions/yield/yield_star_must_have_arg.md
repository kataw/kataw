# Kataw parser test case

## Input

`````js
function* f() { yield*; }
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
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
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
                                    "start": 15,
                                    "end": 21
                                },
                                "delegate": true,
                                "asteriskToken": {
                                    "kind": 67143222,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 15,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 15,
                            "end": 23
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 25
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "function* f() { yield*; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 22, end: 23

```

