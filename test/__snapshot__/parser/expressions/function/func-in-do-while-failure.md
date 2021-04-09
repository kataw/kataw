# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
do function *f(){} while (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 169,
            "expression": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 27
            },
            "statement": {
                "kind": 176,
                "asyncToken": null,
                "generatorToken": {
                    "kind": 67143222,
                    "autofix": 0,
                    "flags": 0,
                    "start": 11,
                    "end": 13
                },
                "name": {
                    "kind": 81921,
                    "value": "f",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 214,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 15,
                    "end": 16
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "statements": [],
                        "multiline": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 17,
                        "end": 17
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 16,
                    "end": 18
                },
                "typeParameters": null,
                "returnType": null,
                "autofix": 0,
                "flags": 2304,
                "start": 2,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "text": "do function *f(){} while (x);",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 21,
            "error": "Function declarations are not allowed in an arbitrary statement position.",
            "start": 2,
            "end": 11
        }
    ],
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

