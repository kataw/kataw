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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 5,
                        "end": 13
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 13,
                        "end": 13
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
                                        "flags": 80,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 22
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "consequent": {
                                        "kind": 168,
                                        "flags": 16,
                                        "start": 28,
                                        "end": 29
                                    },
                                    "elseKeyword": null,
                                    "alternate": null,
                                    "flags": 80,
                                    "start": 16,
                                    "end": 29
                                }
                            ],
                            "flags": 32,
                            "start": 16,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 31
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 5,
                    "end": 31
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 96,
                    "start": 32,
                    "end": 36
                },
                "flags": 32,
                "start": 5,
                "end": 36
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 36,
                "end": 39
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 39,
                "end": 41
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 42,
                "end": 43
            },
            "flags": 80,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "for (function(){ if (a in b); }.prop in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

for (function () {
  if (a in b);
}.prop in x);
```

### Diagnostics

```javascript
✔ No errors
```

