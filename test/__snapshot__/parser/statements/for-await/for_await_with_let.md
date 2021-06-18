# Kataw parser test case

## Input

`````js
async function f() { for await (let x of y) {} }
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                                "flags": 80,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 24,
                                "end": 30
                            },
                            "initializer": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 37
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 35,
                                        "end": 37
                                    }
                                ],
                                "flags": 16,
                                "start": 35,
                                "end": 37
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 37,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 40,
                                "end": 42
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 45,
                                    "end": 45
                                },
                                "flags": 16,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 80,
                            "start": 20,
                            "end": 46
                        }
                    ],
                    "flags": 32,
                    "start": 20,
                    "end": 46
                },
                "flags": 32,
                "start": 18,
                "end": 48
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "async function f() { for await (let x of y) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

async function f() {
  for await (let of y)
    {
    }
}
```

### Diagnostics

```javascript
✔ No errors
```

