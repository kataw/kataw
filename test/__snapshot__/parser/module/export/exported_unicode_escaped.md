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
### CST

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
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 1,
                "start": 12,
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
                                "rawText": "\\u0061bc",
                                "flags": 96,
                                "start": 21,
                                "end": 30
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "start": 21,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "start": 21,
                    "end": 30
                },
                "flags": 0,
                "start": 19,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 12,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "var abc = 5;\nexport { \\u0061bc }",
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

