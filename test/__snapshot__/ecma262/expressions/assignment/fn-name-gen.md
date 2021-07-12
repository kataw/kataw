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

### CST

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
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "gen",
                            "rawText": "gen",
                            "flags": 96,
                            "start": 9,
                            "end": 13
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 9,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
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
                    "flags": 97,
                    "start": 14,
                    "end": 20
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 22,
                        "end": 31
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 31,
                        "end": 32
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 35,
                        "end": 35
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 38,
                            "end": 38
                        },
                        "flags": 32,
                        "start": 36,
                        "end": 39
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 22,
                    "end": 39
                },
                "flags": 32,
                "start": 14,
                "end": 39
            },
            "flags": 16,
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
                    "flags": 97,
                    "start": 40,
                    "end": 44
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 44,
                    "end": 46
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 46,
                        "end": 55
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 55,
                        "end": 56
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 57,
                        "end": 57
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 60,
                            "end": 60
                        },
                        "flags": 32,
                        "start": 58,
                        "end": 61
                    },
                    "returnType": null,
                    "flags": 288,
                    "start": 46,
                    "end": 61
                },
                "flags": 32,
                "start": 40,
                "end": 61
            },
            "flags": 16,
            "start": 40,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "var xGen, gen;\n\nxGen = function* x() {};\ngen = function*() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript

  var xGen, gen;
  xGen = function* x() {};
  gen = function* () {};

```

### Diagnostics

```javascript
✔ No errors
```

