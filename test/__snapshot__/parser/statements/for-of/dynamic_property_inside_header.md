# Kataw parser test case

## Input

`````js
async function f() {
    for await (x[a in b] of y);
}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "start": 20,
                                "end": 28
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 28,
                                "end": 34
                            },
                            "initializer": {
                                "kind": 536871042,
                                "member": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 64,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 38,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 36,
                                "end": 45
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 45,
                                "end": 48
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 48,
                                "end": 50
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 51,
                                "end": 52
                            },
                            "flags": 81,
                            "start": 20,
                            "end": 52
                        }
                    ],
                    "flags": 33,
                    "start": 20,
                    "end": 52
                },
                "flags": 32,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "async function f() {\n    for await (x[a in b] of y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

async function f() {
  for await ( of y);
}
```

### Diagnostics

```javascript
✔ No errors
```

