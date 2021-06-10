# Kataw parser test case

## Input

`````js
function f() { for await (x of y) {} }
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
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 14,
                                "end": 18
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 18,
                                "end": 24
                            },
                            "initializer": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 26,
                                "end": 27
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 27,
                                "end": 30
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 16,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 80,
                            "start": 14,
                            "end": 36
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 36
                },
                "flags": 32,
                "start": 12,
                "end": 38
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function f() { for await (x of y) {} }",
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
✖ A 'for-await-of' statement is only allowed within an async function or async generator. - start: 24, end: 26

```

