# Kataw parser test case

## Input

`````js
function *f(){   for (yield of y);   }
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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 10,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 20
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 27
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "of",
                                    "rawText": "of",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 30
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 22,
                                "end": 30
                            },
                            "condition": null,
                            "incrementor": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 32
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 34
                            },
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 34
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 38
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "function *f(){   for (yield of y);   }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 22, end: 30

```

