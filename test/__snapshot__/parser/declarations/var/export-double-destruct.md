# Kataw parser test case

## Input

`````js
export var [foo] = arr, [bar] = arr2;
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
            "kind": 257,
            "declaration": {
                "kind": 155,
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 202,
                                    "elements": [
                                        {
                                            "kind": 244,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "foo",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 15
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 10,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 81921,
                                "value": "arr",
                                "autofix": 0,
                                "flags": 768,
                                "start": 18,
                                "end": 22
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 10,
                            "end": 22
                        },
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 202,
                                    "elements": [
                                        {
                                            "kind": 244,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "autofix": 0,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 28
                                },
                                "autofix": 0,
                                "flags": 256,
                                "start": 23,
                                "end": 29
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 81921,
                                "value": "arr2",
                                "autofix": 0,
                                "flags": 768,
                                "start": 31,
                                "end": 36
                            },
                            "autofix": 0,
                            "flags": 128,
                            "start": 23,
                            "end": 36
                        }
                    ],
                    "autofix": 0,
                    "flags": 128,
                    "start": 10,
                    "end": 36
                },
                "autofix": 0,
                "flags": 128,
                "start": 6,
                "end": 37
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "export var [foo] = arr, [bar] = arr2;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 60,
            "error": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "end": 6
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

