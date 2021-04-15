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
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "xGen",
                            "rawText": "xGen",
                            "flags": 768,
                            "start": 3,
                            "end": 8
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 9,
                        "end": 13
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "xGen",
                    "rawText": "xGen",
                    "flags": 768,
                    "start": 14,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 22,
                        "end": 31
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 768,
                        "start": 31,
                        "end": 32
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 32,
                        "end": 34
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 34,
                        "end": 36
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 38,
                            "end": 38
                        },
                        "flags": 256,
                        "start": 36,
                        "end": 39
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 22,
                    "end": 39
                },
                "flags": 256,
                "start": 14,
                "end": 39
            },
            "flags": 128,
            "start": 14,
            "end": 40
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "gen",
                    "rawText": "gen",
                    "flags": 768,
                    "start": 40,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 44,
                    "end": 46
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37814362,
                        "flags": 768,
                        "start": 46,
                        "end": 55
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 768,
                        "start": 55,
                        "end": 56
                    },
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 56,
                        "end": 58
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 60,
                            "end": 60
                        },
                        "flags": 256,
                        "start": 58,
                        "end": 61
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 2304,
                    "start": 46,
                    "end": 61
                },
                "flags": 256,
                "start": 40,
                "end": 61
            },
            "flags": 128,
            "start": 40,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "var xGen, gen;\n\nxGen = function* x() {};\ngen = function*() {};",
    "fileName": "__root__",
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

