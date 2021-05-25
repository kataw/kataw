# Kataw parser test case

## Input

`````js
function *f(){ for (yield of obj); }
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
                "flags": 0,
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
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
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
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "awaitKeyword": null,
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 0,
                                    "start": 20,
                                    "end": 25
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 20,
                                "end": 25
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "start": 25,
                                "end": 28
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 28,
                                "end": 32
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 33,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "function *f(){ for (yield of obj); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 25, end: 28
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 28, end: 32

```

