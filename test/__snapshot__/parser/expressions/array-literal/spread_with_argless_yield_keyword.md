# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
function *f(){ return [...yield]; }
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
            "generatorToken": {
                "kind": 67143222,
                "autofix": 0,
                "flags": 0,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "value": "f",
                "autofix": 0,
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "autofix": 0,
                "flags": 256,
                "start": 12,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "statements": [
                        {
                            "kind": 161,
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "argument": {
                                                "kind": 229,
                                                "delegate": false,
                                                "asteriskToken": null,
                                                "expression": null,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 23,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 31
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 32
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "multiline": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 14,
                    "end": 33
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "autofix": 0,
            "flags": 2304,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "function *f(){ return [...yield]; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

