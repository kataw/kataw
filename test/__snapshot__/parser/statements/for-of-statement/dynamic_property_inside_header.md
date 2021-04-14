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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                                "flags": 768,
                                "start": 20,
                                "end": 28
                            },
                            "initializer": {
                                "kind": 130,
                                "member": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 81921,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 768,
                                        "start": 38,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 768,
                                        "start": 39,
                                        "end": 42
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 768,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 256,
                                    "start": 38,
                                    "end": 44
                                },
                                "flags": 256,
                                "start": 36,
                                "end": 45
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 48,
                                "end": 50
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 128,
                                "start": 51,
                                "end": 52
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 768,
                                "start": 28,
                                "end": 34
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 52
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 20,
                    "end": 52
                },
                "flags": 256,
                "start": 18,
                "end": 54
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1280,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "text": "async function f() {\n    for await (x[a in b] of y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

