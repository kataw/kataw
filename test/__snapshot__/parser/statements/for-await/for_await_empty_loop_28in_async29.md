# Kataw parser test case

## Input

`````js
async function f(){ for await (;;) {} }
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
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 0,
                                "start": 19,
                                "end": 23
                            },
                            "initializer": null,
                            "condition": null,
                            "incrementor": null,
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [],
                                    "flags": 16,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 16,
                                "start": 34,
                                "end": 37
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 37
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 37
                },
                "flags": 32,
                "start": 18,
                "end": 39
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "async function f(){ for await (;;) {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

async function f() {
  for (;;)
    {}
}
```

### Diagnostics

```javascript
✔ No errors
```

