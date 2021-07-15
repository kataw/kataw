# Kataw parser test case

## Input

`````js
async function x() {
  await: async;
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
                "text": "x",
                "rawText": "x",
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
                            "kind": 163,
                            "label": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 20,
                                "end": 28
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 29
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 35
                                },
                                "flags": 16,
                                "transformFlags": 4096,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 38
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async function x() {\n  await: async;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 28, end: 29
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 28, end: 29
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 35

```

