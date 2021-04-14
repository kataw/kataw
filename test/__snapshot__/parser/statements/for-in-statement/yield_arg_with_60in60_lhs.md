# Kataw parser test case

## Input

`````js
function *f(){   for (yield x in y in z);   }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 81921,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 768,
                                "start": 14,
                                "end": 20
                            },
                            "kind": 166,
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 27
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 81921,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 29
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 81921,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 32,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 768,
                                    "start": 34,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 768,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 256,
                                "start": 32,
                                "end": 39
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 128,
                                "start": 40,
                                "end": 41
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 41
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 41
                },
                "flags": 256,
                "start": 13,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2304,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "function *f(){   for (yield x in y in z);   }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

