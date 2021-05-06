# Kataw parser test case

## Input

`````js
async function f() { for await ((x) of y) {} }
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
                "flags": 0,
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
                                "flags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 35,
                                "end": 38
                            },
                            "initializer": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 35
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 38,
                                "end": 40
                            },
                            "statement": {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 16,
                                "start": 41,
                                "end": 44
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 44
                },
                "flags": 32,
                "start": 18,
                "end": 46
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function f() { for await ((x) of y) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

async function f() {
  for await ((x) of y) {
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

