# Kataw parser test case

## Input

`````js
for (function(){ a in b; }.prop in x);
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
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 768,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 768,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 256,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 128,
                                    "start": 16,
                                    "end": 24
                                }
                            ],
                            "multiline": false,
                            "flags": 256,
                            "start": 16,
                            "end": 24
                        },
                        "flags": 256,
                        "start": 15,
                        "end": 26
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 5,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 768,
                    "start": 27,
                    "end": 31
                },
                "autofix": 0,
                "flags": 256,
                "start": 5,
                "end": 31
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 34,
                "end": 36
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 37,
                "end": 38
            },
            "flags": 128,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "for (function(){ a in b; }.prop in x);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

