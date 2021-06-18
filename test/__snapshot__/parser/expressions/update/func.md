# Kataw parser test case

## Input

`````js
function f(){ return --a; }
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
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 13,
                                "end": 20
                            },
                            "expression": {
                                "kind": 128,
                                "operandToken": {
                                    "kind": 196636,
                                    "flags": 96,
                                    "start": 20,
                                    "end": 23
                                },
                                "operand": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 24
                            },
                            "flags": 80,
                            "start": 13,
                            "end": 25
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 25
                },
                "flags": 32,
                "start": 12,
                "end": 27
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "function f(){ return --a; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

function f() {
  return  --a;
}
```

### Diagnostics

```javascript
✔ No errors
```

