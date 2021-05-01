# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export var let = x;
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
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 0,
                    "start": 6,
                    "end": 10
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "original": "let",
                                "text": "let",
                                "rawText": " let",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "original": "x",
                                "text": "x",
                                "rawText": " x",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 18
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 18
                },
                "flags": 16,
                "start": 6,
                "end": 19
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": true,
    "source": "export var let = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 10, end: 14

```

