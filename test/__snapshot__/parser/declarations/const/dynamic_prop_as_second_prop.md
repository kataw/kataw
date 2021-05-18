# Kataw parser test case

## Input

`````js
const {a, [x]: y} = a;
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

### CST

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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 8
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 13
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 16
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 9,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 21
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 21
            },
            "flags": 33554448,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "const {a, [x]: y} = a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

const {
  a,
  [x]: y
} = a;
```

### Diagnostics

```javascript
✔ No errors
```

