# Kataw parser test case

## Input

`````js
async function f(){
  for await (a ? b : c of x);
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
            "asteriskToken": null,
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
                "end": 16
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
                                "flags": 81,
                                "start": 19,
                                "end": 25
                            },
                            "initializer": {
                                "kind": 197,
                                "shortCircuit": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 34
                                },
                                "questionToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 36
                                },
                                "consequent": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "colonToken": {
                                    "kind": 21,
                                    "flags": 64,
                                    "start": 38,
                                    "end": 40
                                },
                                "alternate": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 40,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 42
                            },
                            "condition": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 45,
                                "end": 47
                            },
                            "incrementor": {
                                "kind": 134299649,
                                "text": "of",
                                "rawText": "of",
                                "flags": 96,
                                "start": 42,
                                "end": 45
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 48,
                                "end": 49
                            },
                            "flags": 81,
                            "start": 19,
                            "end": 49
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 49
                },
                "flags": 32,
                "start": 18,
                "end": 51
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (a ? b : c of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

async function f() {
  for (a ? b : c; x; of);
}
```

### Diagnostics

```javascript
✔ No errors
```

