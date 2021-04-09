# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
foo(async function f(){})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "foo",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncToken": {
                                "kind": 82031,
                                "autofix": 0,
                                "flags": 0,
                                "start": 4,
                                "end": 9
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "value": "f",
                                "autofix": 0,
                                "flags": 768,
                                "start": 18,
                                "end": 20
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 21,
                                "end": 22
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 23,
                                    "end": 23
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "autofix": 0,
                            "flags": 1280,
                            "start": 4,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 24
                },
                "flags": 256,
                "start": 0,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "text": "foo(async function f(){})",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

