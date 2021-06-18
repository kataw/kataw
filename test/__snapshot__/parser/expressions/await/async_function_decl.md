# Kataw parser test case

## Input

`````js
async function await(){}
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
                "text": "await",
                "rawText": "await",
                "flags": 96,
                "start": 14,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 22
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 23,
                    "end": 23
                },
                "flags": 32,
                "start": 22,
                "end": 24
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "async function await(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

async function await() {}
```

### Diagnostics

```javascript
✔ No errors
```

