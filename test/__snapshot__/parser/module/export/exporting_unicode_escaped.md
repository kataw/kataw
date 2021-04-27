# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var \u0061bc = 5;
export { abc }
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
                "flags": 768,
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
                            "rawText": "var",
                            "flags": 768,
                            "start": 3,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 16
            },
            "flags": 128,
            "start": 0,
            "end": 17
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 768,
                "start": 17,
                "end": 24
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
                                "rawText": "abc",
                                "flags": 768,
                                "start": 26,
                                "end": 30
                            },
                            "binding": null,
                            "flags": 128,
                            "start": 26,
                            "end": 30
                        }
                    ],
                    "flags": 128,
                    "start": 26,
                    "end": 30
                },
                "flags": 0,
                "start": 24,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 128,
            "start": 17,
            "end": 32
        }
    ],
    "isModule": true,
    "text": "var \\u0061bc = 5;\nexport { abc }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

