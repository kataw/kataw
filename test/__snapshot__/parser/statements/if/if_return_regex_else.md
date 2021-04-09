# Kataw parser test case

## Input

`````js
function x(){
  if (x) return / /;
  else;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 176,
            "asyncToken": null,
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 11,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 164,
                            "expression": {
                                "kind": 81921,
                                "value": "x",
                                "autofix": 0,
                                "flags": 768,
                                "start": 20,
                                "end": 21
                            },
                            "consequent": {
                                "kind": 161,
                                "expression": {
                                    "kind": 221,
                                    "text": "/ /",
                                    "autofix": 0,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 33
                                },
                                "autofix": 0,
                                "flags": 128,
                                "start": 1,
                                "end": 22
                            },
                            "alternate": {
                                "kind": 168,
                                "autofix": 0,
                                "flags": 128,
                                "start": 41,
                                "end": 42
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 42
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 42
                },
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 256,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function x(){\n  if (x) return / /;\n  else;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

