# Kataw parser test case

## Input

`````js
async function f(){
  for await (a = b of x);
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
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 19,
                                "end": 25
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 33,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 34,
                                    "end": 36
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 38
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 38
                            },
                            "condition": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 41,
                                "end": 43
                            },
                            "incrementor": {
                                "kind": 134299649,
                                "text": "of",
                                "rawText": "of",
                                "flags": 96,
                                "start": 38,
                                "end": 41
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 44,
                                "end": 45
                            },
                            "flags": 81,
                            "start": 19,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 45
                },
                "flags": 32,
                "start": 18,
                "end": 47
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await (a = b of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

  async function f() {
    for (a = b; x; of)
      ;
  }

```

### Diagnostics

```javascript
✔ No errors
```

