# Kataw parser test case

## Input

`````js
for (function(){ a in b; };;);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 177,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 5,
                    "end": 13
                },
                "generatorToken": null,
                "name": null,
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
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
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "operatorToken": {
                                        "kind": 21006388,
                                        "flags": 96,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 23
                                },
                                "flags": 16,
                                "start": 16,
                                "end": 24
                            }
                        ],
                        "flags": 32,
                        "start": 16,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 26
                },
                "returnType": null,
                "flags": 32,
                "start": 5,
                "end": 26
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 29,
                "end": 30
            },
            "flags": 80,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for (function(){ a in b; };;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

for (function () {
    a in b;
  }; ; );
```

### Diagnostics

```javascript
✔ No errors
```

