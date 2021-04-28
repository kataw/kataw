# Kataw parser test case

## Input

`````js
async function f(){ return; }
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 512,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 5,
                "start": 0,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 19,
                                "start": 0,
                                "end": 26
                            },
                            "expression": null,
                            "flags": 128,
                            "start": 0,
                            "end": 19
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 27
                },
                "flags": 256,
                "start": 18,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "async function f(){ return; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

