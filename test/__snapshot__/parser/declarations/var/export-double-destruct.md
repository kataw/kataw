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
                "declareKeyword": null,
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
                                "kind": 201,
                                "elementList": {
                                    "kind": 202,
                                    "elements": [
                                        {
                                            "kind": 244,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 768,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 12,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 768,
                                "start": 18,
                                "end": 22
                            },
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
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 25,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 29
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr2",
                                "rawText": "arr2",
                                "flags": 768,
                                "start": 31,
                                "end": 36
                            },
                            "flags": 128,
                            "start": 23,
                            "end": 36
                        }
                    ],
                    "flags": 128,
                    "start": 10,
                    "end": 36
                },
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
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

