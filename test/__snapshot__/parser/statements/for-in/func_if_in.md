# Kataw parser test case

## Input

`````js
for (function(){ if (a in b); }.prop in x);
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
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 768,
                        "start": 5,
                        "end": 13
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 13,
                        "end": 15
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 164,
                                    "ifKeyword": {
                                        "kind": 37757019,
                                        "flags": 768,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 768,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 256,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "consequent": {
                                        "kind": 168,
                                        "flags": 128,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 128,
                                    "start": 16,
                                    "end": 29
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 16,
                            "end": 29
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 31
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 5,
                    "end": 31
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 768,
                    "start": 32,
                    "end": 36
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 36
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 39,
                "end": 41
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 42,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "for (function(){ if (a in b); }.prop in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

