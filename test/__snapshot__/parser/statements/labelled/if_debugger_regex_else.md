# Kataw parser test case

## Input

`````js
function x(){
  if (x)
    debugger
    / /;
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
                                "kind": 171,
                                "autofix": 0,
                                "flags": 128,
                                "start": 22,
                                "end": 35
                            },
                            "alternate": null,
                            "autofix": 0,
                            "flags": 128,
                            "start": 13,
                            "end": 35
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 221,
                                "text": "/ /",
                                "autofix": 0,
                                "flags": 768,
                                "start": 35,
                                "end": 43
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "autofix": 0,
                    "flags": 256,
                    "start": 13,
                    "end": 44
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
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function x(){\n  if (x)\n    debugger\n    / /;\n  else;\n}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 52,
            "end": 54
        }
    ],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

