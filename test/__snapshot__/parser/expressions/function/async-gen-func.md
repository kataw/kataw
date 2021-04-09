# Kataw parser test case

## Input

`````js
async function * f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": {
                "kind": 82031,
                "autofix": 0,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 19,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 21,
                    "end": 21
                },
                "autofix": 0,
                "flags": 256,
                "start": 20,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 3328,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "async function * f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

