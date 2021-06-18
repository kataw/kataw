# Kataw parser test case

## Input

`````js
async function f(){ return; }
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 19,
                                "end": 26
                            },
                            "expression": null,
                            "flags": 80,
                            "start": 19,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 27
                },
                "flags": 32,
                "start": 18,
                "end": 29
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "async function f(){ return; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

async function f() {
  return ;
}
```

### Diagnostics

```javascript
✔ No errors
```

