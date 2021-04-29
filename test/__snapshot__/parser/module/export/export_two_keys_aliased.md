# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var x,y; export {x as a, y as b}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 6,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 6,
                        "end": 7
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 8,
                "end": 15
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 261,
                    "specifiers": [
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 17,
                                "end": 18
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 17,
                            "end": 18
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "as",
                                "rawText": "as",
                                "flags": 96,
                                "start": 18,
                                "end": 21
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 18,
                            "end": 21
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 21,
                            "end": 23
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 24,
                            "end": 26
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "as",
                                "rawText": "as",
                                "flags": 96,
                                "start": 26,
                                "end": 29
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 26,
                            "end": 29
                        },
                        {
                            "kind": 260,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "binding": null,
                            "flags": 16,
                            "start": 29,
                            "end": 31
                        }
                    ],
                    "flags": 16,
                    "start": 17,
                    "end": 31
                },
                "flags": 0,
                "start": 15,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 8,
            "end": 32
        }
    ],
    "isModule": true,
    "text": "var x,y; export {x as a, y as b}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

