# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var xGen, gen;

xGen = function* x() {};
gen = function*() {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "xGen",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "gen",
                            "autofix": 0,
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 9,
                        "end": 13
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "xGen",
                    "autofix": 0,
                    "flags": 768,
                    "start": 14,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 37814362,
                    "autofix": 0,
                    "flags": 0,
                    "start": 14,
                    "end": 22
                },
                "right": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "name": {
                        "kind": 81921,
                        "value": "x",
                        "autofix": 0,
                        "flags": 768,
                        "start": 32,
                        "end": 34
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 35,
                        "end": 36
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 38,
                            "end": 38
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 36,
                        "end": 39
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 2304,
                    "start": 22,
                    "end": 39
                },
                "autofix": 0,
                "flags": 256,
                "start": 14,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 14,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "value": "gen",
                    "autofix": 0,
                    "flags": 768,
                    "start": 40,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 37814362,
                    "autofix": 0,
                    "flags": 0,
                    "start": 40,
                    "end": 46
                },
                "right": {
                    "kind": 177,
                    "asyncToken": null,
                    "generatorToken": {
                        "kind": 67143222,
                        "autofix": 0,
                        "flags": 0,
                        "start": 55,
                        "end": 56
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "autofix": 0,
                        "flags": 256,
                        "start": 57,
                        "end": 58
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "statements": [],
                            "multiline": false,
                            "autofix": 0,
                            "flags": 256,
                            "start": 60,
                            "end": 60
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 58,
                        "end": 61
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "autofix": 0,
                    "flags": 2304,
                    "start": 46,
                    "end": 61
                },
                "autofix": 0,
                "flags": 256,
                "start": 40,
                "end": 61
            },
            "autofix": 0,
            "flags": 128,
            "start": 40,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "var xGen, gen;\n\nxGen = function* x() {};\ngen = function*() {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

