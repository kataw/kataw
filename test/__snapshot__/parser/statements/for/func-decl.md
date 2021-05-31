# Kataw parser test case

## Input

`````js
function x(a, [x]) {}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 11,
                        "end": 12
                    },
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 202,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 96,
                "start": 10,
                "end": 18
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 20,
                    "end": 20
                },
                "flags": 32,
                "start": 18,
                "end": 21
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "function x(a, [x]) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

function x(a, [x]) {}
```

### Diagnostics

```javascript
✔ No errors
```

