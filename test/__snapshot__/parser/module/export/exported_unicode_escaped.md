# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var abc = 5;
export { \u0061bc }
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
                            "text": "abc",
                            "rawText": "abc",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 768,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 12,
                "start": 1,
                "end": 19
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
                                "text": "abc",
                                "rawText": "export",
                                "flags": 768,
                                "start": 21,
                                "end": 30
                            },
                            "binding": null,
                            "flags": 128,
                            "start": 21,
                            "end": 30
                        }
                    ],
                    "flags": 128,
                    "start": 21,
                    "end": 30
                },
                "flags": 0,
                "start": 19,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 12,
            "end": 32
        }
    ],
    "isModule": true,
    "text": "var abc = 5;\nexport { \\u0061bc }",
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

