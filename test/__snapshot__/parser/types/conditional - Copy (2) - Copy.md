# Kataw parser test case

## Input

`````js
var a : { (x: T): number; }
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
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 241,
                                "properties": [],
                                "indexers": [],
                                "callProperties": [
                                    {
                                        "kind": 196,
                                        "value": [
                                            {
                                                "kind": 149,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 81921,
                                                    "value": "x",
                                                    "autofix": 0,
                                                    "flags": 768,
                                                    "start": 11,
                                                    "end": 12
                                                },
                                                "optionalToken": null,
                                                "typeAnnotation": {
                                                    "kind": 144,
                                                    "id": {
                                                        "kind": 81921,
                                                        "value": "T",
                                                        "autofix": 0,
                                                        "flags": 768,
                                                        "start": 13,
                                                        "end": 15
                                                    },
                                                    "typeParameters": null,
                                                    "autofix": 0,
                                                    "flags": 0,
                                                    "start": 13,
                                                    "end": 15
                                                },
                                                "autofix": 0,
                                                "flags": 0,
                                                "start": 11,
                                                "end": 15
                                            }
                                        ],
                                        "staticToken": false,
                                        "autofix": 0,
                                        "flags": 0,
                                        "start": 9,
                                        "end": 25
                                    }
                                ],
                                "internalSlots": [],
                                "autofix": 0,
                                "flags": 0,
                                "start": 7,
                                "end": 27
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 5,
                            "end": 27
                        },
                        "initializer": null,
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 27
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "var a : { (x: T): number; }",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 15,
            "end": 16
        }
    ],
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

