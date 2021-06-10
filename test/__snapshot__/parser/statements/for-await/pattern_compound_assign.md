# Kataw parser test case

## Input

`````js
async function f() {
  for await ({}/=y of a)x
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
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
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 20,
                                "end": 26
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 26,
                                "end": 32
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 48,
                                    "start": 34,
                                    "end": 36
                                },
                                "operatorToken": {
                                    "kind": 4133,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 38
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 39
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 39,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 42,
                                "end": 44
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 45,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 45,
                                "end": 46
                            },
                            "flags": 81,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 46
                },
                "flags": 32,
                "start": 18,
                "end": 48
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await ({}/=y of a)x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 34, end: 38

```

