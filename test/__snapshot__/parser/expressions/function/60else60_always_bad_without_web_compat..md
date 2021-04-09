# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
if (x) ; else function f(){}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 164,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 5
            },
            "consequent": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 8
            },
            "alternate": {
                "kind": 176,
                "asyncToken": null,
                "generatorToken": null,
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 22,
                    "end": 24
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 25,
                    "end": 26
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 27,
                        "end": 27
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 26,
                    "end": 28
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 28
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": true,
    "text": "if (x) ; else function f(){}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

