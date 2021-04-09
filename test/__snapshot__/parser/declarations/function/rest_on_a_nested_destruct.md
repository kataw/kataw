# Kataw parser test case

## Input

`````js
let [...[foo, bar]] = obj;
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
            "kind": 162,
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "autofix": 0,
                                            "flags": 0,
                                            "start": 5,
                                            "end": 8
                                        },
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
                                                            "start": 9,
                                                            "end": 12
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 9,
                                                        "end": 12
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 81921,
                                                            "value": "bar",
                                                            "autofix": 0,
                                                            "flags": 768,
                                                            "start": 13,
                                                            "end": 17
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "autofix": 0,
                                                        "flags": 256,
                                                        "start": 13,
                                                        "end": 17
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "autofix": 0,
                                                "flags": 256,
                                                "start": 9,
                                                "end": 17
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 8,
                                            "end": 18
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 5,
                                        "end": 18
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 5,
                                "end": 18
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 3,
                            "end": 19
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 21,
                            "end": 25
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 25
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "let [...[foo, bar]] = obj;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

