# Kataw parser test case

## Input

`````js
export var a, ...b = 1;
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 155,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 768,
                    "start": 6,
                    "end": 10
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 81921,
                                "text": "a",
                                "rawText": "a",
                                "flags": 768,
                                "start": 10,
                                "end": 12
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 128,
                            "start": 10,
                            "end": 12
                        }
                    ],
                    "flags": 128,
                    "start": 10,
                    "end": 13
                },
                "flags": 128,
                "start": 6,
                "end": 13
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 81921,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 81921,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 256,
                "start": 17,
                "end": 22
            },
            "flags": 128,
            "start": 17,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "export var a, ...b = 1;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 60,
            "error": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 13,
            "end": 17
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 13,
            "end": 17
        }
    ],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

