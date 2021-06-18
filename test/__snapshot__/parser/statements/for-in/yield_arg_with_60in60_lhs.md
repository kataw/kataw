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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "start": 14,
                                "end": 20
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 27
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 29
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 29,
                                "end": 32
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 32,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 21006388,
                                    "flags": 96,
                                    "start": 34,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 39
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 40,
                                "end": 41
                            },
                            "flags": 80,
                            "start": 14,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 41
                },
                "flags": 32,
                "start": 13,
                "end": 45
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "function *f(){   for (yield x in y in z);   }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 22, end: 29
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 32, end: 34

```

