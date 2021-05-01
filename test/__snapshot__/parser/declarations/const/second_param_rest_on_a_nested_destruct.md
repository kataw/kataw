# Kataw parser test case

## Input

`````js
const [x, ...[foo, bar]] = obj;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
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
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 8
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 9,
                                            "end": 13
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
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "start": 14,
                                                            "end": 17
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 14,
                                                        "end": 17
                                                    },
                                                    {
                                                        "kind": 244,
                                                        "ellipsisToken": null,
                                                        "binding": {
                                                            "kind": 134299649,
                                                            "text": "bar",
                                                            "rawText": "bar",
                                                            "flags": 96,
                                                            "start": 18,
                                                            "end": 22
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 18,
                                                        "end": 22
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 14,
                                                "end": 22
                                            },
                                            "flags": 32,
                                            "start": 13,
                                            "end": 23
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 24
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 30
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 30
            },
            "flags": 33554448,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "const [x, ...[foo, bar]] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

