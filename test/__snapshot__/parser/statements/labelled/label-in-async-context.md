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
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                    "start": 20,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 28
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
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
                                    "start": 29,
                                    "end": 35
                                },
                                "flags": 16,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 17,
                            "start": 20,
                            "end": 36
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 36
                },
                "flags": 32,
                "start": 18,
                "end": 38
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "async function x() {\n  await: async;\n}",
    "fileName": "__root__",
    "flags": 0,
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
✖ Identifier expected. 'await' is a reserved word in strict mode and module goal and cannot be used as an label - start: 20, end: 29
✖ Function declarations cannot be used in a single-statement context - start: 29, end: 35

```

