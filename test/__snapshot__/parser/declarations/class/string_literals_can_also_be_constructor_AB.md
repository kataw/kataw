# Kataw parser test case

## Input

`````js
class x { "constructor"(){}; constructor(){}; }
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 178,
            "decorators": null,
            "name": {
                "kind": 81921,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "decorators": null,
                        "staticToken": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67174403,
                                "value": "constructor",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 23
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 24,
                                "end": 25
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "statements": [],
                                    "multiline": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 26,
                                    "end": 26
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 25,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 23,
                            "end": 27
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 27
                    }
                ],
                "flags": 256,
                "start": 9,
                "end": 27
            },
            "flags": 128,
            "start": 0,
            "end": 27
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 81921,
                    "value": "constructor",
                    "autofix": 0,
                    "flags": 768,
                    "start": 28,
                    "end": 40
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 41,
                    "end": 41
                },
                "flags": 256,
                "start": 28,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 28,
            "end": 42
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 43,
                "end": 43
            },
            "autofix": 0,
            "flags": 128,
            "start": 42,
            "end": 44
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "class x { \"constructor\"(){}; constructor(){}; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 42,
            "end": 43
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 45,
            "end": 47
        }
    ],
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

