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
                "transformFlags": 0,
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
                        "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 14,
                        "end": 14
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
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "operatorToken": {
                                            "kind": 21006388,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "flags": 96,
                                        "transformFlags": 5120,
                                        "start": 16,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 16,
                                    "end": 24
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 24
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 26
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 26
                },
                "expression": {
                    "kind": 134299649,
                    "text": "prop",
                    "rawText": "prop",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 5,
                "end": 31
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 31,
                "end": 34
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 34,
                "end": 36
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 37,
                "end": 38
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "for (function(){ a in b; }.prop in x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
for (function () {
  a in b;
}.prop in x);
```

### Diagnostics

```javascript
✔ No errors
```

