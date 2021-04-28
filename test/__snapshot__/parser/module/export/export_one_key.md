# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {x}; var x;
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
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "binding": null,
                            "flags": 128,
                            "start": 8,
                            "end": 9
                        }
                    ],
                    "flags": 128,
                    "start": 8,
                    "end": 9
                },
                "flags": 0,
                "start": 6,
                "end": 10
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
                "start": 11,
                "end": 15
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
                            "flags": 768,
                            "start": 15,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 15,
                        "end": 17
                    }
                ],
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "flags": 128,
            "start": 11,
            "end": 18
        }
    ],
    "isModule": true,
    "text": "export {x}; var x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

